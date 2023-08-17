module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/*.{html,js}',
    './public/index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-scrollbar')],
}

