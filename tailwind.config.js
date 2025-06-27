/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ✅ VERY IMPORTANT
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
       animation: {
    'spin-slow': 'spin 8s linear infinite',
  },
    },
  },
  plugins: [],
};
