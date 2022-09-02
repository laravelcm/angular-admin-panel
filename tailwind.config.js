const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ECFFEC',
          100: '#E3FFE3',
          200: '#CEEACD',
          300: '#b0ddae',
          400: '#74c372',
          500: '#39a935',
          600: '#339830',
          700: '#2b7f28',
          800: '#226520',
          900: '#1c531a',
        },
        secondary: {
          lighter: '#F29121',
          light: '#F8B133',
          50: '#FEF9F3',
          100: '#FDF4E7',
          200: '#FAE2C4',
          300: '#F7D1A1',
          400: '#F2AF5A',
          500: '#EC8C13',
          600: '#D47E11',
          700: '#B1690E',
          800: '#8E540B',
          900: '#744509',
        }
      },
      fontFamily: {
        sans: ['Inter var', ...fontFamily.sans],
        mono: ['Roboto', ...fontFamily.mono],
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};
