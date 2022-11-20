/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "bookmark-purple": "#5267DF",
        "bookmark-blue": "#2e43a3",
        "bookmark-red": "#f87171",
        "bookmark-gray": "#9ca3af",
        "bookmark-white": "#f8fafc",
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"]
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    }
  },
  plugins: [],
}
