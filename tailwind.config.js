/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkcl:'#7D5A50',
        primary:'#B4846C',
        secondary:'#E5B299',
        lightgray:'rgb(244, 243, 239)',
        dakrpink:'rgb(155,112,191)',
        lightpink:'rgb(135,92,172)',
        lightred:'rgb(249,140,145)',
        cl1:'rgb(251,161,161)',
        cl2:'rgb(31,207,167)',
        cl3:'rgb(88,212,240)',
        cl4:'rgb(249,140,145)',
        cl5:'rgb(135,92,172)',
      }
    },
  },
  plugins: [],
}
