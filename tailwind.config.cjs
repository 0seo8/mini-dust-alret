/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: "url('./src/assets/selectImg.svg')",
    },
  },
  plugins: [],
  safelist: [],
}
