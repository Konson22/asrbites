/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkbrown:'rgb(94, 15, 21)',
        darkpink:'rgb(170, 74, 102)',
        lightpink:'rgb(242, 152, 188)',
      }
    },
  },
  plugins: [],
}
