/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'text-light': '#E5E5E5',
        'text-dark': '#14213D',
        'dark-clr': '#242423',
        'light-clr': '#f8f9fa',
        'accent-clr': '#ff5e5b',
      },
      dropShadow: {
        hero: '0 0 1rem white',
      },
    },
  },
  plugins: [],
};
