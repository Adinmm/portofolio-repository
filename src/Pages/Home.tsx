import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaDownload,
  FaExternalLinkAlt,
  FaCode,
  FaLaptopCode,
  FaMobile,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGit,
  FaDocker,
  FaSun,
  FaMoon,
  FaTimes,
  FaCheckCircle,
} from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { IoRocketSharp } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { ImSpinner4 } from "react-icons/im";

import ProfileImage from "../assets/profile_image.jpeg";
import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.png";
import { useSendMessage } from "../Hooks/appHooks";
import { useGlobalContext } from "../Context/Context";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const { register, onSubmit, handleSubmit, errors, isLoading } =
    useSendMessage();

  const handleFormSubmit = (data: any) => {
    onSubmit(data);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: any) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const { state, stateHandle } = useGlobalContext();

  const skills = [
    { name: "React.js", icon: FaReact, level: 95 },
    { name: "JavaScript", icon: FaJs, level: 85 },
    { name: "Node.js", icon: FaNodeJs, level: 80 },
    { name: "TypeScript", icon: SiTypescript, level: 85 },
    { name: "HTML5", icon: FaHtml5, level: 95 },
    { name: "CSS3", icon: FaCss3Alt, level: 90 },
    { name: "Git", icon: FaGit, level: 70 },
    { name: "Docker", icon: FaDocker, level: 70 },
  ];

  const projects = [
    {
      title: "Chemical Lab Service Order ",
      description: `Developed a Chemical Lab Service Order system focusing on the frontend with React.js (routing, form validation, state management, API integration, and responsive UI design), while also contributing to the backend using Node.js, Express, and PostgreSQL for building RESTful APIs, implementing JWT authentication, and managing database operations to ensure secure and efficient system performance. 
 `,
      tech: ["React", "Node.js", "Postgres", "Express"],
      style: "bg-gradient-to-br from-blue-500 to-purple-600",
      image: Project1,
      demoUrl: "https://lab.glabsindonesia.com/",
      githubUrl:
        "https://github.com/greenlabsindonesia/greenlabs-form-frontend",
    },
    {
      title: "Tourism Promotion System",
      description:
        "Developed a Tourism Promotion System as a personal project at the request of the village head and local tourism managers. The system was built using React.js with TypeScript and Tailwind CSS for modern and responsive styling. This project was designed to facilitate the digital promotion of village tourism destinations, making information more accessible to the public and tourists.",
      tech: ["React", "Tailwind", "Postgres", "Laravel"],
      style: "bg-gradient-to-br from-blue-500 to-purple-600",
      image: Project2,
      demoUrl: "https://wisata-pemepek.netlify.app",
      githubUrl: "https://github.com/kknPemepek/wisata-pemepek",
    },
    {
      title: "Agricultural Data and Reporting ",
      description:
        "On the Agricultural Data and Reporting project, I served as a Frontend Developer, building the entire frontend structure of the application. I worked on models using Zod for data validation, created custom hooks with React Hook Form, managed global state with the Context API, and developed supporting utilities to make the development process more efficient and structured.",
      tech: ["React", "Tailwind", "Vite", "TypeScript"],
      style: "bg-gradient-to-br from-blue-500 to-purple-600",
      image: Project3,
      demoUrl: "#",
      githubUrl: "https://github.com/Adinmm/si-tawa-app",
    },
  ];

  const services = [
    {
      icon: FaCode,
      title: "Web Development",
      description:
        "Pengembangan website modern dan responsif dengan teknologi terkini",
    },
    {
      icon: FaMobile,
      title: "Mobile App Development",
      description: "Aplikasi mobile cross-platform dengan React Native",
    },
    {
      icon: FaDatabase,
      title: "Backend Development",
      description: "API dan sistem backend yang scalable dan secure",
    },
    {
      icon: IoRocketSharp,
      title: "Performance Optimization",
      description: "Optimasi performa aplikasi untuk pengalaman user terbaik",
    },
  ];

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        {/* Navigation */}
        <nav
          className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Adinmm.dev
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8">
                {["home", "about", "skills", "projects", "contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`capitalize transition-colors duration-300 hover:text-blue-500 ${
                        activeSection === item
                          ? "text-blue-500 font-semibold"
                          : ""
                      }`}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>

              {/* Theme Toggle & Mobile Menu Button */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {isDarkMode ? (
                    <FaSun className="w-5 h-5" />
                  ) : (
                    <FaMoon className="w-5 h-5" />
                  )}
                </button>

                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {isMenuOpen ? (
                    <HiX className="w-6 h-6" />
                  ) : (
                    <HiMenuAlt3 className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {["home", "about", "skills", "projects", "contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="block w-full text-left px-3 py-2 capitalize hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Muhammad Muayyadin
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
                Full Stack Developer
              </p>
              <p className="text-lg mb-12 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                Passionate about creating exceptional digital experiences with
                modern technologies
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300 flex items-center justify-center space-x-2"
                >
                  <span>View My Work</span>
                  <IoRocketSharp />
                </button>
                <a
                  href="/Muhammad_Muayyadin_CV_Academy2026.pdf"
                  download="Muhammad_Muayyadin_CV_Academy2026.pdf"
                  className="border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <FaDownload />
                  <span>Download CV</span>
                </a>
              </div>

              <div className="flex justify-center space-x-6">
                {[
                  {
                    icon: FaGithub,
                    href: "https://github.com/Adinmm",
                    label: "GitHub",
                  },
                  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
                  {
                    icon: FaInstagram,
                    href: "https://www.instagram.com/adinmm_?utm_source=qr&igsh=cXhzNXQwdW95dnM0 ",
                    label: "Instagram",
                  },
                  { icon: FaEnvelope, href: "#", label: "Email" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">About Me</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Get to know me better
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl shadow-2xl">
                  <img
                    className="w-full h-full object-cover rounded-2xl"
                    src={ProfileImage}
                    alt=""
                  />
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl font-bold mb-4">
                  Hi, I'm Muhammad Muayyadin
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  I am a full-stack developer with experience building
                  end-to-end web applications, skilled in React.js, Node.js, and
                  PostgreSQL for creating responsive frontends and scalable
                  backends.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  I am proficient in API integration, authentication, Docker,
                  and Git/GitHub, and committed to delivering efficient,
                  user-friendly solutions that support business growth and
                  provide value to society.
                </p>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="flex items-center space-x-3">
                    <FaMapMarkerAlt className="text-blue-500" />
                    <span>Lombok Barat, Indonesia</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaPhone className="text-blue-500" />
                    <span>085 338 477 929</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaEnvelope className="text-blue-500" />
                    <span>muhammadmuayyadin@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaLaptopCode className="text-blue-500" />
                    <span>Available for hire</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">My Services</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                What I can do for you
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center"
                >
                  <service.icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Technologies I work with
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <skill.icon className="w-8 h-8 text-blue-500 mr-3" />
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Some of my recent work
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  <div
                    className={`h-48 ${project.style} relative overflow-hidden`}
                  >
                    <img className="object-cover" src={project.image} alt="" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex space-x-4">
                        <a
                          href={project.demoUrl}
                          className="p-3 bg-white rounded-full text-gray-900 hover:bg-blue-500 hover:text-white transition-all duration-300"
                        >
                          <FaExternalLinkAlt />
                        </a>
                        <a
                          href={project.githubUrl}
                          className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-800 hover:text-white transition-all duration-300"
                        >
                          <FaGithub />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Let's work together on your next project
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold mb-6">
                  Let's talk about your project
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  Saya selalu terbuka untuk mendiskusikan proyek-proyek menarik
                  dan peluang kerja sama. Mari berkolaborasi untuk mewujudkan
                  ide Anda!
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                      <FaEnvelope className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        muhammadmuayyadin@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                      <FaPhone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        085 338 477 929
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                      <FaMapMarkerAlt className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Gunungsari, Lombok Barat, Indonesia
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 transition-colors"
                      placeholder="Your name"
                    />
                    <p className="text-xs mt-2 text-red-300 px-1">
                      {errors ? errors.name?.message : null}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 transition-colors"
                      placeholder="your@email.com"
                    />
                    <p className="text-xs mt-2 text-red-300 px-1">
                      {errors ? errors.email?.message : null}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 transition-colors"
                      placeholder="Tell me about your project..."
                    ></textarea>
                    <p className="text-xs text-red-300 px-1">
                      {errors ? errors.message?.message : null}
                    </p>
                  </div>

                  <button
                    disabled={isLoading}
                    type="submit"
                    className={`w-full flex items-center justify-center bg-gradient-to-r gap-2  from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:scale-105 transition-transform duration-300 font-semibold ${
                      isLoading ? "cursor-not-allowed" : ""
                    }`}
                  >
                    <p>Send Message</p>
                    {isLoading && <ImSpinner4 className="animate-spin" />}
                  </button>
                </div>
              </form>
            </div>
            {state.toggle && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <div
                  className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                  onClick={() => stateHandle("toggle", false)}
                ></div>

                {/* Popup Content */}
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 transform ">
                  {/* Close Button */}
                  <button
                    onClick={() => stateHandle("toggle", false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  >
                    <FaTimes className="w-5 h-5" />
                  </button>

                  {/* Success Icon */}
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaCheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Thank you for reaching out! I'll get back to you as soon
                      as possible.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button
                      onClick={() => stateHandle("toggle", false)}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
                    >
                      Great!
                    </button>
                    <button
                      onClick={() => {
                        stateHandle("toggle", false);
                        scrollToSection("projects");
                      }}
                      className="flex-1 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300"
                    >
                      View Projects
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400">
                © 2025 Muhammad Muayyadin. All rights reserved. Built with React
                & Tailwind CSS
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
