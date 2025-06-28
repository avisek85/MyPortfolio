// src/components/Projects.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Filter } from "lucide-react";

import { Card } from "./ui/Card";
import { CardHeader } from "./ui/CardHeader";
import { CardTitle } from "./ui/CardTitle";
import { CardContent } from "./ui/CardContent";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";

const projects = [
  {
    id: 1,
    title: "PC Activity Tracker",
    description:
      "A full-stack productivity tracker using React, Node.js, and MongoDB with real-time app usage logging and analytics dashboard.",
    image: "/PcActivity.png?height=300&width=500",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Framer Motion"],
    category: "MERN",
    features: [
      "Real-time app usage logging",
      "Analytics dashboard (daily/weekly/yearly)",
      "JWT-based authentication",
      "Local data synchronization",
    ],
    liveDemo: "https://github.com/avisek85/PCTRACKER",
    github: "https://github.com/avisek85/PCTRACKER",
  },
  {
    id: 2,
    title: "Sparkify",
    description:
      "A MERN stack swipe-based matchmaking app with real-time chat, optimized search, and secure authentication.",
    image: "/Sparkify.png?height=300&width=500",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
    category: "MERN",
    features: [
      "Swipe-based matchmaking",
      "Real-time chat with Socket.io",
      "Secure login system",
      "Optimized search with filters",
    ],
    liveDemo: "https://sparkify-theta.vercel.app/",
    github: "https://github.com/avisek85/Sparkify",
  },
  {
    id: 3,
    title: "LinkedIn Automation Tool",
    description:
      "Automated job application tool with intelligent filtering, human-like behavior simulation, and MongoDB tracking.",
    image: "/Linkedin.png?height=300&width=500",
    tech: ["Node.js", "Puppeteer", "MongoDB", "JavaScript"],
    category: "Automation",
    features: [
      "Automated job applications",
      "Intelligent job filtering",
      "Human behavior simulation",
      "MongoDB tracking system",
    ],
    liveDemo: "https://github.com/avisek85/AjobTool",
    github: "https://github.com/avisek85/AjobTool",
  },
  {
    id: 4,
    title: "Play Paytm",
    description:
      "Full-stack money transfer application featuring secure user authentication, real-time balance updates, and transaction history using session-based consistency.",
    image: "/Playpaytm.png?height=300&width=500",
    tech: ["Node.js", "Express.js", "MongoDB", "React"],
    category: "Mern",
    features: [
      "User signup with random initial balance",
      "Secure token-based authentication",
      "Instant money transfers between users",
      "Transaction history tracking",
      "MongoDB sessions for data consistency",
    ],
    liveDemo: "https://play-paytm.vercel.app/", // replace with real link if different
    github: "https://github.com/avisek85/PlayPaytm",
  },
];

const categories = ["All", "MERN", "Automation"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === category)
      );
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work in full-stack development and
            automation
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-2 p-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                onClick={() => handleCategoryChange(category)}
                className="flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300">
                  {/* Project Image with Overlay Buttons */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <Button size="sm" variant="secondary">
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="secondary">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Card Info */}
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-800 dark:text-white">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          className="text-xs py-2 px-4 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors cursor-pointer"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                        Key Features:
                      </h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
