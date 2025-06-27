import React from "react";
import { motion } from "framer-motion";
import { Trophy, Code, Star, Target } from "lucide-react";
import { Card } from "./ui/Card";
import { CardContent } from "./ui/CardContent";

const achievements = [
  {
    icon: Code,
    title: "400+ Problems Solved",
    description: "LeetCode and other coding platforms",
    value: "400+",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900",
  },
  {
    icon: Trophy,
    title: "Full Stack Certification",
    description: "Udemy Web Development Course",
    value: "Certified",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900",
  },
  {
    icon: Star,
    title: "DSA Certification",
    description: "Love Babbar DSA Course",
    value: "Certified",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900",
  },
  {
    icon: Target,
    title: "Projects Completed",
    description: "Full-stack and automation projects",
    value: "5+",
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-100 dark:bg-orange-900",
  },
];

const stats = [
  { label: "LeetCode Problems", value: "200+" },
  { label: "GitHub Repositories", value: "20+" },
  { label: "Technologies Mastered", value: "10+" },
  { label: "Projects Deployed", value: "5+" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Achievements & Stats
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Milestones and accomplishments in my development journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div
                    className={`inline-flex p-4 rounded-full ${achievement.bgColor} mb-4`}
                  >
                    <achievement.icon
                      className={`h-8 w-8 ${achievement.color}`}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {achievement.value}
                  </h3>
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8">
                Development Statistics
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-blue-100">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                Problem Solving Journey
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                      150+
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Easy Problems
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Foundation building
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                      150+
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Medium Problems
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Skill enhancement
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-red-600 dark:text-red-400">
                      20+
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Hard Problems
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Advanced challenges
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
