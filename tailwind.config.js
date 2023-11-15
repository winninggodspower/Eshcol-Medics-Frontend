/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'secondary': '#352E43',
        'main': '#055C9F',
        'Green': '#079E16',
        'grey': '#7C8C93',
        'grey-2': 'rgba(217, 217, 217, 0.3)',
        'grey-3': 'rgba(0, 0, 0, 0.4)',
        'grey-4': 'rgba(217, 217, 217, 1)',
        'grey-5': 'rgba(124, 140, 147, 1)',
      },
      fontFamily: {
        'inter': ['inter', 'sans-serif'],
        'railway': ['raleway', 'sans-serif']
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    plugin(({addVariant})=>{addVariant('children', '&>*')})
  ],
}

