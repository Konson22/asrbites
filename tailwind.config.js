/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkgray:'rgb(208, 209, 193)',
        lightgray:'rgb(231, 231, 222)',
        lightblue:'rgb(112, 66, 266)',
      }
    },
  },
  plugins: [],
}


// /** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: ["./src/**/*.{html, jsx, tsx, js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

