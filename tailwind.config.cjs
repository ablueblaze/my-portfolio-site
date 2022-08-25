/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-b': '#51FFEE',
        'prime-l': '#2E4057',
        'highlight-l': '#EE2E31',
        'prime-d': '#788BFF',
        'highlight-d': '#89043D',
        'bgd-l': '',
        'bgd-d': '',
      },
      dropShadow: {
        hero: '0 0 1rem white',
      },
    },
  },
  plugins: [],
};
