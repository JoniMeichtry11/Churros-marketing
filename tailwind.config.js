/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [addDynamicIconSelectors()]
}

