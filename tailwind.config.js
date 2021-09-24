module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        "5.2xl": "3.2rem",
        "fs-lg": "1.15rem",
        "fs-md": "1.025rem",
        cardHeadingSize: "24px",
        cardParagraphSize: "20px",
        cardSubHeadingSize: "18px",
        "fs-4k": "3rem"
      },
      colors: {
        white: "#fff",
        primary: "#27697F",
        "primary-light": "#f7fdff",

        "secondary": "#606C7A",
        "light-gray": "#798897",
        "light-gray": "#79889720",
        "exception": "#d8d8d8",

        muted: "#f6f6f6",
        "muted-light": "#fafafa",
        "muted-background": "#F5F9FF",

        "accent-red": "#ED3A52",
        "accent-red-light": "#fff7f8",

        "accent-blue": "#002450",
        "accent-blue-light": "#fdfdff",
        "accent-dark-blue": "#090a25",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
