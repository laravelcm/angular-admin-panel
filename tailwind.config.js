const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: 'class',
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.green,
        secondary: colors.emerald
      },
      fontFamily: {
        sans: ['Inter var', ...fontFamily.sans],
        mono: ['Roboto Mono', ...fontFamily.mono],
      },
      maxWidth: {
        '8xl': '90rem',
      },
      screens: {
        '2xl': '1536px',
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
