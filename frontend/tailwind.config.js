/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/*.{js,ts,jsx,tsx}',
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/layout/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
            serif: ['Roboto', 'serif'],
        },
        extend: {
            animation: {
                scroll: 'scroll 20s linear infinite',
                scroll2: 'scroll2 20s linear infinite',
            },
            keyframes: {
                scroll: {
                    '0%': {transform: 'translateX(0%)'},
                    '100%': {transform: 'translateX(-102%)'},
                },
                scroll2: {
                    '0%': {transform: 'translateX(102%)'},
                    '100%': {transform: 'translateX(0%)'},
                },
            },
            colors: {
                'blue': '#226FFF',
                'zebra-blue-off': '#E6F7FF',
                'zebra-blue-on': '#3A83F9',
                'white': '#FFFFFF',
                'black': '#000000',
                'gray': '#808080',
                'light-gray': '#EBEBEB',
                'footer-gray': '#494F65',
                'important-blue': '#E6F7FF',
            },
            gridTemplateColumns: {
                'page-grid': '35% 26% 26%'
            },
            fontSize: {
                xs: '0.6rem',
                sm: '0.8rem',
                base: '1rem',
                xl: '1.25rem',
                '2xl': '1.563rem',
                '3xl': '1.953rem',
                '4xl': '2.441rem',
                '5xl': '3.052rem',
              },
              backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
              }
        },
    },
    plugins: [
        require('tailwind-scrollbar'),
        require('tailwind-scrollbar-hide'),
    ],
}


