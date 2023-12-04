/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        cl1:'rgb(155,112,191)',
        // cl1:'rgb(165, 78, 43)',
        cl2:'rgb(249,140,145)',
        cl3:'rgb(88,212,240)',
        cl4:'rgb(237, 32, 119)',
        cl5:'rgb(135,92,172)',
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}
