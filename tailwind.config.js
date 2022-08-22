/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
        "fade-in-quick": "fadeIn .5s ease-in-out"
      },
      keyframes: () => ({
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      }),
      backgroundImage: (theme) => ({
        landing: "url('./images/landing-mobile.jpg')",
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}