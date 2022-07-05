/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        landing: "url('./images/landing-mobile.jpg')",
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}