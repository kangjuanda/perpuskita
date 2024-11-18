/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './public/**/*.{html,php,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#0c4a6e',
        secondary: '#e2e8f0',
        hitam: '#0f172a',
      },
      zIndex: {
        '100': '100',
      }
    },
  },
  plugins: [],
}

