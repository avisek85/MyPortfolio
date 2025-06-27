import './App.css'

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
// import Header from "@/components/header"
// import Hero from "@/components/hero"
// import About from "@/components/about"
// import Projects from "@/components/projects"
// import Skills from "@/components/skills"
// import Education from "@/components/education"
// import Achievements from "@/components/achievements"
// import Contact from "@/components/contact"
// import Footer from "@/components/footer"
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Project'
import Skills from './components/Skills'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Loading Portfolio...</h2>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Toaster position="top-right" />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
       
      </main>
          <Footer />
    </div>
  );
}
