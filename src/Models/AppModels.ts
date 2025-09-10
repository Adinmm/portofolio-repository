import { z } from "zod";

export const AppModels = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Minimum message 10 characters"),
});

// Export type
export type AppModelsType = z.infer<typeof AppModels>;
