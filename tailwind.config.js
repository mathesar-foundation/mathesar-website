/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
  ],
  darkMode: false,
  theme: {
    colors: {
      ...colors,
      stone: {
        '50': '#f8f6f4',
        '100': '#eeece6',
        '200': '#ddd7cb',
        '300': '#cec5b6',
        '400': '#af9e88',
        '500': '#9e8871',
        '600': '#917965',
        '700': '#796355',
        '800': '#645248',
        '900': '#52453c',
      },
      blue: {
        '50': '#f0f9fb',
        '100': '#d8eef5',
        '200': '#b6deeb',
        '300': '#84c6dc',
        '400': '#4aa5c6',
        '500': '#2e87ac',
        '600': '#2a7093',
        '700': '#275a77',
        '800': '#284c62',
        '900': '#254054',
      },
      gray: {
        '50': '#f4f6f7',
        '100': '#e2e7eb',
        '200': '#c9d2d8',
        '300': '#a4b3bc',
        '400': '#778b99',
        '500': '#5b6f7f',
        '600': '#4f5e6b',
        '700': '#444f5a',
        '800': '#3d444d',
        '900': '#25292e',
      }
    },
    extend: {},
  },
  variants: {},
  plugins: [
    //require('@tailwindcss/typography'),
  ],
}