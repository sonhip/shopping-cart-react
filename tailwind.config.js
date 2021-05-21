module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        "-210": "-210px",
      },
      backgroundColor: {
        content: "#f5f5f5",
        primary: "#766161",
        text: "#87a7b3",
        hover: "#cdc7be",
        any: "#e1f1dd",
        sitebar: "#564a4a",
        main: "#700c11",
        "main-light": "#c95b60",
      },
      colors: {
        content: "#f5f5f5",
        primary: "#766161",
        text: "#87a7b3",
        hover: "#cdc7be",
        any: "#e1f1dd",
        main: "#5c080c",
        "main-light": "#c95b60",
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
