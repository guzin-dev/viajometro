/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        materialIcons: ["Material Symbols Outlined"],
      },
      colors: {
        brand: "#00B2FF",
      },
    },
  },
  plugins: [],
};
