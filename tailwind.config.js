module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        "-180": "-180px",
      },
    },
  },
  variants: {
    extend: {
      visibility: ["hover", "focus", "group-hover"],
    },
  },
  plugins: [],
};
