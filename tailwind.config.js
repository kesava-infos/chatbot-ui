import { colors } from "./src/typography";

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      primary: colors.primary,
      secondary: colors.secondary,
      tertiary: colors.tertiary,
      white: colors.white,
      black: colors.black,
    },
  },
  plugins: [],
};
