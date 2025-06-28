import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Code,
} from "lucide-react";

import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import { useToast } from ".././hooks/use-toast";
import { CardContent } from "./ui/CardContent";
import { CardHeader } from "./ui/CardHeader";
import { CardTitle } from "./ui/CardTitle";
import { Card } from "./ui/Card";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "abhisheksinghrajput5888@gmail.com",
    href: "mailto:abhisheksinghrajput5888@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 9817036557",
    href: "tel:+919817036557",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Jhajjar, Haryana, India",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    href: "https://github.com/avisek85",
    color: "hover:text-gray-800 dark:hover:text-gray-200",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/abhishek-singh-185861267",
    color: "hover:text-blue-600",
  },
  {
    icon: Code,
    name: "LeetCode",
    href: "https://leetcode.com/u/avisek_hu/",
    color: "hover:text-orange-600",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast, toastError } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  //   const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  //   const userID = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  //   const templateParams = {
  //     from_name: formData.name,
  //     from_email: formData.email,
  //     message: formData.message,
  //   };

  //   try {
  //     await emailjs.send(serviceID, templateID, templateParams, userID);
  //     toast({
  //       title: "Message Sent!",
  //       description: "Thank you for your message. I'll get back to you soon!",
  //     });
  //     setFormData({ name: "", email: "", message: "" });
  //   } catch (err) {
  //     toastError({
  //       title: "Failed to Send",
  //       description:
  //         "There was an error sending your message. Try again later.",
  //     });
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formEndpoint = "https://formspree.io/f/mdkzywya"; // Replace with your actual Formspree endpoint

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      toastError({
        title: "Failed to Send",
        description:
          "There was an error sending your message. Try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 max-w-screen-xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Let's discuss your next project or just say hello!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 dark:text-white">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="flex flex-wrap sm:flex-nowrap items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      <info.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-800 dark:text-white">
                        {info.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 break-words">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </CardContent>
            </Card>

            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800 dark:text-white">
                  Connect With Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 justify-start sm:justify-center">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.2, y: -5 }}
                      className={`p-3 bg-white dark:bg-gray-700 rounded-full shadow-lg transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="h-6 w-6" />
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 dark:text-white">
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full"
                  />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full"
                  />
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your message"
                    rows={5}
                    className="w-full"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                    ) : (
                      <Send className="mr-2 h-5 w-5" />
                    )}
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
