// src/components/About.jsx

import { motion } from "framer-motion";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { CardContent } from "./ui/CardContent";

const skills = [
  "JavaScript",
  "React.js",
  "Node.js",
  "MongoDB",
  "Express.js",
  "Python",
  "C++",
  "HTML/CSS",
  "TailwindCSS",
  "Git",
  "REST API",
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Full Stack Developer with hands-on experience in building MERN stack
            applications and automation tools.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <CardContent className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  Professional Summary
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I'm a passionate Full Stack Developer with strong
                  problem-solving skills and hands-on experience in building
                  scalable web applications. With 400+ DSA problems solved and
                  expertise in the MERN stack, I focus on creating efficient,
                  user-friendly solutions.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  My experience includes developing productivity tracking
                  applications, matchmaking platforms, and automation tools. I'm
                  always eager to learn new technologies and tackle challenging
                  problems.
                </p>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                    Experience Highlights
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Web Developer Intern at Octanet - Developed responsive websites with SEO optimization",
                      "Built multiple full-stack applications using MERN stack",
                      "Specialized in automation tools and web scraping",
                    ].map((point, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                        <p className="text-gray-600 dark:text-gray-400">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <CardContent>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  Skills Cloud
                </h3>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Badge
                       
                        className="text-sm py-2 px-4 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors cursor-pointer"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="mt-8 space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Quick Stats
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        400+
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        DSA Problems
                      </div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        5+
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Projects
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
