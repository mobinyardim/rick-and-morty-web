const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
    content: [
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {},
        colors: {
            primary: "#3B82F6",
            onPrimary: "#EEEEEE",
            primaryContainer: "#EEF7FE",
            onPrimaryContainer: "#4189C3",

            background: "#FFFFFF",
            backgroundVariant: "#F8F9FC",
            backgroundDisabled: "#F3F5F9",
            divider: "#E7EBF3",
            disabled: "#CFD7E6",
            stroke: "#9FAECD",
            onBackgroundHigh: "#262B36",
            onBackgroundMedium: "#465064",
            onBackgroundLow: "#677593"
        },
        fontFamily: {
            "sans": ['Haas Grot Text R Web']
        }
    },
    plugins: [],
})
