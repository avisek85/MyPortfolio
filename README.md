# 🌐 Abhishek Singh - Developer Portfolio

Welcome to my personal portfolio! This is a fully responsive, production-grade web app built with **React.js**, **Tailwind CSS**, and **Framer Motion** to showcase my skills, projects, achievements, and professional background.

![Portfolio Screenshot](./preview.png)

---

## 🚀 Live Demo

🔗 [Visit My Portfolio](https://abhishek-singh.dev)  
📝 [Download My Resume](./public/Abhishek_Singh_Resume.pdf)

---

## 📁 Project Structure

/src
/components → Reusable UI components (Header, Footer, Cards)
/sections → Major sections like About, Projects, Skills, Contact
/data → All project/education/achievement data in JSON
/assets → Icons, logos, and images
/hooks → Custom React hooks (e.g., useToast)

yaml
Copy
Edit

---

## 🛠️ Built With

- ⚛️ **React.js** – Component-based frontend library
- 🎨 **Tailwind CSS** – Utility-first CSS framework for rapid UI development
- 🎞 **Framer Motion** – Smooth animations & transitions
- 🌙 **Dark Mode** – Seamless light/dark theme toggle
- 🧠 **EmailJS** – For handling contact form emails
- 📦 **Vite** – Lightning-fast development environment

---

## ✨ Features

- 📄 **About Me** – Quick intro, interests, and background
- 🧑‍💻 **Skills & Tech Stack** – Frontend, Backend, Tools
- 🏆 **Achievements** – Coding milestones & certifications
- 🎓 **Education Timeline** – Visual academic timeline
- 🧰 **Projects Showcase** – Interactive cards with tech used, features, and live links
- 📬 **Contact Form** – Send emails directly via EmailJS
- 🧑‍💼 **Responsive Design** – Fully mobile/tablet/desktop ready
- 🌘 **Dark Mode** – Toggle between light and dark themes

---

## 🧩 Sections

| Section         | Description                                      |
|-----------------|--------------------------------------------------|
| Hero            | Name, tagline, CTA buttons (resume/download)     |
| About           | Brief description, interests, and personality    |
| Skills          | Tech stack and tools used                        |
| Projects        | Interactive cards with images and live links     |
| Achievements    | Visual stats and certificates                    |
| Education       | Timeline with institutions and qualifications    |
| Contact         | Info, social links, and working contact form     |
| Footer          | Social icons, copyright, and branding            |

---

## 📬 Contact Form Setup

To make the contact form work:

1. Create a free [EmailJS account](https://emailjs.com)
2. Create a service, email template, and get your **Service ID**, **Template ID**, and **Public Key**
3. Add them to your `contact` form logic inside the React component (see `/sections/Contact.jsx`)

---

## 🧠 How to Use / Customize

1. **Clone this repo**

```bash
git clone https://github.com/abhishek-singh/portfolio.git
cd portfolio
Install dependencies

bash
Copy
Edit
npm install
Run locally

bash
Copy
Edit
npm run dev
Customize data

Edit data in:

src/data/projects.js

src/data/skills.js

src/data/education.js

src/data/achievements.js

Update images in /assets or links for GitHub, LinkedIn, etc.

📷 Screenshots
Light Mode	Dark Mode

🌟 Credits
Inspired by modern portfolio designs on GitHub and Dribbble

Icons from Lucide Icons

Fonts via Google Fonts

🤝 Connect With Me
🌐 Website

💼 LinkedIn

🧑‍💻 GitHub

⚔️ LeetCode

📃 License
This project is licensed under the MIT License — feel free to use, modify, and build upon it.

⭐️ Show Some Love
If you found this helpful or impressive, please ⭐ the repo — it helps a lot!

yaml
Copy
Edit

---

Would you like me to generate the image assets (preview.png, screenshots) or help you set up the `EmailJS