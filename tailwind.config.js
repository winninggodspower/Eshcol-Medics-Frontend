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
        'tertiary': '#394FE1',
        'Green': '#079E16',
        'Green-2': '#567867',
        'Green-3': '#0CF607',
        'grey': '#7C8C93',
        'grey-2': 'rgba(217, 217, 217, 0.3)',
        'grey-3': 'rgba(0, 0, 0, 0.4)',
        'grey-4': 'rgba(217, 217, 217, 1)',
        'grey-5': 'rgba(124, 140, 147, 1)',
        'grey-6': 'rgba(0, 0, 0, 0.3)',
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

