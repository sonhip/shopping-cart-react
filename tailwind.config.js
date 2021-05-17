module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        "-210": "-210px",
      },
      backgroundColor: {
        "bg-content": "#f5f5f5",
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
