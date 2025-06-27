// src/components/Hero.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Code } from "lucide-react";
import { Button }  from "./ui/Button"; // Adjust path if needed

const roles = [
  "Full Stack Developer",
  "Problem Solver",
  "MERN Stack Expert",
  "Automation Specialist",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = roles[currentRole];
    const delay = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText.length < currentText.length) {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      } else if (!isDeleting && displayText.length === currentText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(displayText.slice(0, -1));
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/avisek85",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/abhishek-singh-185861267",
      label: "LinkedIn",
    },
    {
      icon: Code,
      href: "https://leetcode.com/u/avisek_hu/",
      label: "LeetCode",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-6">
              Hi, I'm{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Abhishek Singh
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-4xl text-gray-600 dark:text-gray-300 mb-4">
              I'm a{" "}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Passionate about building efficient, scalable web solutions with
              400+ DSA problems solved and hands-on experience in MERN stack
              development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            
              <a
                href="/AbhishekSingh_Resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <link.icon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
