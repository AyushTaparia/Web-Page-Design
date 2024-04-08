/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: {
          light: "#3b82f6",
          DEFAULT: "#1e40af",
          dark: "#172554",
        },
      },
    },
  },
  plugins: [],
};
