/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   theme: {
     extend: {},
     screens: {
      'sm': '620px',
      // => @media (min-width: 620px) { ... }

      'md': '980px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }