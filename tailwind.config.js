const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    container: {
      center: true,
      padding: '10px',
    },
    fontFamily: {
      Stencil: 'Stencil',
      'IRANSans-Medium': 'IRANSans-Medium',
      AzarMehr: 'AzarMehr',
    },
    extend: {},
  },
  plugins: [nextui()],
};
