/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

const generateREMSizes = (limit, from = 80) => {
  const sizes = {};
  for (let quadruple = from; quadruple < limit / 4; quadruple += 4) {
    sizes[quadruple] = `${(quadruple * 4) / 16}rem`;
  }

  return sizes;
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      maxHeight: generateREMSizes(1024, 0),
      maxWidth: generateREMSizes(1024, 0),
      minHeight: generateREMSizes(1024, 0),
      minWidth: generateREMSizes(1024, 0),
      width: generateREMSizes(1024),
    },
    screens: {
      xs: "475px",
      xxs: "300px",
      ...defaultTheme.screens,
    },
  },
};
