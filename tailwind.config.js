/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

const generateREMSizeClass = (limit, from) => {
  return Array.from({ length: (limit / 16)}).reduce((sizes, _, index) => {
    const size = from + (index * 4);
    sizes[size] = `${(from / 4) + index}rem`;
    return sizes;
  }, {});
}

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "xxs": "300px",
      "xs": "475px",
      ...defaultTheme.screens
    },
    extend: {
      width: generateREMSizeClass(1024),
      minHeight: generateREMSizeClass(1024, 0),
      maxHeight: generateREMSizeClass(1024, 0),
      maxWidth: generateREMSizeClass(1024, 0),
      minWidth: generateREMSizeClass(1024, 0),
      borderWidth: {
        "1": "1px"
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}
