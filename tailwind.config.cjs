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
      spacing: {
        '1/4-screen': '25%',
        '1/2-screen': '50%',
        '3/4-screen': '75vh',
      },
      dropShadow: {
        hero: '0 0 1rem white',
      },
    },
  },
  plugins: [],
};
