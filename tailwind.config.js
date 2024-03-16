/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

const generateREMSizes = (limit, from = 80) => {
  const sizes  = {};
  for (let quadruple = from; quadruple < limit / 4; quadruple += 4 ) {
    sizes[quadruple] = `${(quadruple * 4) / 16}rem`;
  }

  return sizes;
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
      width: generateREMSizes(1024),
      minHeight: generateREMSizes(1024, 0),
      maxHeight: generateREMSizes(1024, 0),
      maxWidth: generateREMSizes(1024, 0),
      minWidth: generateREMSizes(1024, 0),
      borderWidth: {
        "1": "1px"
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}