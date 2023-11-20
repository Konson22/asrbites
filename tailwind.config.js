/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        cl1:'rgb(155,112,191)',
        // darkcl:'#7D5A50',
        // primary:'#B4846C',
        // secondary:'#E5B299',
        // lightgray:'rgb(244, 243, 239)',
        // dakrpink:'rgb(155,112,191)',
        // lightpink:'rgb(135,92,172)',
        // lightred:'rgb(249,140,145)',
        // cl2:'rgb(31,207,167)',
        cl2:'rgb(249,140,145)',
        cl3:'rgb(88,212,240)',
        cl4:'rgb(237, 32, 119)',
        cl5:'rgb(135,92,172)',
      }
    },
  },
  plugins: [],
}
