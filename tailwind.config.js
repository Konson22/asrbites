/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark:'rgb(49, 49, 49)',
        lightblue:'rgb(32, 122, 173)',
        lightblue2:'rgb(51, 150, 209)',
        lightgreen:'rgb(119, 193, 70)',
        lightgray:'rgb(221, 221, 209)',
        darkgray:'rgb(208, 209, 193)',
      }
    },
  },
  plugins: [],
}
