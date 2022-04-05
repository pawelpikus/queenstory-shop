const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"PT Sans"', ...defaultTheme.fontFamily.sans],
        narrow: ['"PT Sans Narrow"', ...defaultTheme.fontFamily.sans],
        extralight: ['"PT Sans Narrow"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
