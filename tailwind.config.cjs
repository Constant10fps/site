const colors = require("tailwindcss/colors")
/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        primary: colors.indigo
      }
    },
    fontFamily: {
      sans: ["Spline Sans Mono"]
    }
  },

  plugins: [],
};

module.exports = config;
