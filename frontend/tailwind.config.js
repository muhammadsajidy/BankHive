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
        "hero": "url('../src/assets/hero.jpg')",
        "heromobile": "url('../src/assets/heromobile.jpg')"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-motion'),
  ],
}

