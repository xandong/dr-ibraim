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
        success: {
          hover: "#39C64F",
          disabled: "#55A361",
          default: "#2E993F",
        },
        cancel: {
          hover: "#DF1F24",
          disabled: "#BD5356",
          default: "#C7181D",
        },
      },
    },
  },
  plugins: [],
};
