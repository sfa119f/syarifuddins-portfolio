/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "navy-dark": "#1D2D50",
        navy: "#133B5C",
        "navy-light": "#1E5F74",
        "green-neon": "#9CFF2E",
        "night-light": "#C9D2D7",
        night: "#90A4AE",
        "night-dark": "#607D8B",
      },
      screens: {
        xs: { min: "426px" },
        "md-max": { max: "767px" },
        "sm-max": { max: "639px" },
        "xs-max": { max: "425px" },
      },
    },
  },
  plugins: [],
};
