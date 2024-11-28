/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        'custom-top': 'calc(50% - 150px)',
      },
      screens: {
        sm375: '375px',
        sm425: '425px',
      },
      height: {
        'custom-calculated-height': 'calc(43.75rem + -6.25 * (100vw - 20rem) / 22.5)',
      },
      fontFamily: {
        poppins: ['poppins', 'sans-serif'],
        spaceAge: ['Space Age'],
      },
      gridTemplateColumns: {
        '70/30': '70/28',
      },
      colors: {
        customPurple: '#735CFF',
        customGray: 'rgba(249, 250, 254, 0.8)',
        custombgGray: 'rgba(249, 250, 254)',
        customTextGray: '#939393',
      },
    },
  },
  plugins: [require('tailwindcss-primeui')],
};
