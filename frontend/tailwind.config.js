const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        const_96: "repeat(auto-fill, 24rem)",
        const_64: "repeat(auto-fill, 16rem)",
        const_44: "repeat(auto-fill, 11rem)",
        const_40: "repeat(auto-fill, 10rem)",
      },
    },
    colors: {
      primary: "#3B82F6",
      onPrimary: "#EEEEEE",
      primaryContainer: "#EEF7FE",
      onPrimaryContainer: "#4189C3",

      background: "#F6F6F8",
      backgroundVariant: "#F8F9FC",
      backgroundDisabled: "#F3F5F9",
      surface: "#FFFFFF",
      divider: "#E7EBF3",
      disabled: "#CFD7E6",
      stroke: "#9FAECD",
      onBackgroundHigh: "#262B36",
      onBackgroundMedium: "#465064",
      onBackgroundLow: "#677593",

      error: "#DC3848",
      onError: "#FFFFFF",
      success: "#28AB46",
      onSuccess: "#FFFFFF",
    },
    fontFamily: {
      sans: ["Haas Grot Text R Web"],
    },
  },
  plugins: [],
});
