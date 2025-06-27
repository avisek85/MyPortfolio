import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { Card } from "./ui/Card";
import { CardContent } from "./ui/CardContent";

const educationData = [
  {
    institution: "Guru Jambheshwar University of Science and Technology",
    degree: "B.Tech in Computer Science and Engineering",
    duration: "2021 - 2025",
    grade: "CGPA: 7",
    type: "university",
    description:
      "Focused on core computer science subjects including DSA, OOP, DBMS, Computer Networks, and Operating Systems.",
  },
  {
    institution: "Government Senior Secondary School, Jhajjar",
    degree: "Higher Secondary Education",
    duration: "2019 - 2020",
    grade: "90%",
    type: "school",
    description:
      "Board of School Education Haryana - Strong foundation in mathematics and science.",
  },
  {
    institution: "Shree Sanatan Dharma Senior Secondary School, Jhajjar",
    degree: "Secondary Education",
    duration: "2017 - 2018",
    grade: "91%",
    type: "school",
    description:
      "Board of School Education Haryana - Strong foundation in mathematics and science.",
  },
];

const certifications = [
  {
    title: "Full Stack Web Development",
    provider: "Udemy",
    icon: Award,
    description: "Comprehensive course covering MERN stack development",
  },
  {
    title: "Data Structures & Algorithms",
    provider: "Love Babbar",
    icon: Award,
    description: "Advanced DSA concepts and problem-solving techniques",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My academic journey and professional certifications
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Academic Background
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 dark:bg-blue-800"></div>

            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

                <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                          <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                            {edu.institution}
                          </h4>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                            {edu.degree}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {edu.duration}
                            </div>
                            <div className="font-semibold text-green-600 dark:text-green-400">
                              {edu.grade}
                            </div>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {edu.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                        <cert.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                          {cert.title}
                        </h4>
                        <p className="text-green-600 dark:text-green-400 font-semibold mb-2">
                          {cert.provider}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
