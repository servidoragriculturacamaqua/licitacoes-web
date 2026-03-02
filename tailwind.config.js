/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        // Cores institucionais para a Secretaria de Agricultura
        'agro-green': '#2d5a27',
        'agro-gold': '#c5a059',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}