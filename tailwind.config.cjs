/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: {
          300: "#369BFA",
          400: "#1E86E1",
          600: "#216CAE",
          800: "#2A4864",
        },
      },
    },
  },
  plugins: [],
};
