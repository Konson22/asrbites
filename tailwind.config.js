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
      }
    },
  },
  plugins: [],
}
