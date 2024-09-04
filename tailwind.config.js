const { lightBlue } = require("@mui/material/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      lightRed: "#F86167",
      indigo: "#03234D",
    },
  },
  plugins: [],
};
