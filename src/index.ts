import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";
import Mustache from "mustache";
import { transporter } from "../src/configs/nodemailer";
import cors from "cors";
async function sendMessageFromPortofolio(
  name: string,
  email: string,
  message: string
) {
  const emailTemplatePath = path.resolve(
    __dirname,
    "./helpers/contact-from-portofolio.html"
  );
  const emailTemplate = fs.readFileSync(emailTemplatePath, "utf8");

await transporter.sendMail({
  from: `"Portfolio Contact" <${email}>`, 
  to: "muhammadmuayyadin@gmail.com",
  subject: "[Contact From Portofolio] - New Message",
  replyTo: email, 
  html: Mustache.render(emailTemplate, { name, email, message }),
});
}

const app = express();
const PORT = 3000;

app.use(cors({
  origin: "http://localhost:5173", // atau "*" untuk semua origin
}));

// Middleware JSON
app.use(express.json());


app.post("/api/send_message", async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  try {
    console.log(name, email, message);
    if (!name || !email || !message) {
      return res.status(400).json({
        status_code: res.statusCode,
        message: "Name, email, and message are required fields",
      });
    }
    await sendMessageFromPortofolio(name, email, message);
    res
      .status(200)
      .json({
        status_code: res.statusCode,
        message: "Email sent successfully",
      });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ 
      status_code: res.statusCode,
      message: "Failed to send email"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
