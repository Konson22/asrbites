/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightgray:'rgb(247, 243, 240)',
        darkbrown:'rgb(94, 15, 21)',
        darkpink:'rgb(170, 74, 102)',
        lightpink:'rgb(189, 28, 98)',
        lightteal:'rgb(47, 187, 161)',
      }
    },
  },
  plugins: [],
}
