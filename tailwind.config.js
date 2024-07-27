/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "fantasy"],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui'),],
}