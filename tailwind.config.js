// tailwind.config.js
module.exports = {
  darkMode: "class", // ✅ Required for theme toggling via class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ Adjust based on file types
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
