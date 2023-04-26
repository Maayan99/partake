/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/pages/*.{js,ts,jsx,tsx}',
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
      "./src/layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      colors: {
          'blue': '#0082FE',
          'white': '#FFFFFF',
          'black': '#000000',
          'gray': '#808080',
      },
    extend: {},
  },
  plugins: [],
}

