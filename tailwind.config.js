/** @type {import('tailwindcss').Config} */
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
      },
      fontFamily: {
        'inter': ['inter', 'sans-serif'],
        'railway': ['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

