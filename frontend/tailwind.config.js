/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/pages/*.{js,ts,jsx,tsx}',
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
      "./src/layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      color: {
          'blue': '#0082FE'
      },
    extend: {},
  },
  plugins: [],
}

