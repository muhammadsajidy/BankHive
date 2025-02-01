/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '360px',
      'md': '640px',
      'lg': '1024px',
    },
    fontFamily: {
      'montserrat': ['Montserrat'],
      'raleway': ['Raleway'],
    },
    extend: {
      backgroundImage: {
        "hero": "url('../src/assets/bg-big.jpg')",
        "heromobile": "url('../src/assets/heromobile.jpg')"
      },
      colors: {
        'left-dark-blue': '#0a0c23',
        'right-dark-blue': '#090c37'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-motion'),
  ],
}

