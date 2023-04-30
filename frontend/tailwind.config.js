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
                'blue': '#0082FE',
                'white': '#FFFFFF',
                'black': '#000000',
                'gray': '#808080',
                'footer-gray': '#494F65',
                'important-blue': '#E6F7FF',
            },
            gridTemplateColumns: {
                'page-grid': '35% 26% 26%'
            }
        },
    },
    plugins: [],
}


