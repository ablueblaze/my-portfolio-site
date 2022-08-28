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
        '1/4-h-screen': '25vh',
        '1/2-h-screen': '50vh',
        '3/4-h-screen': '75vh',
        '1/4-w-screen': '25vh',
        '1/2-w-screen': '50vh',
        '3/4-w-screen': '75vh',
        '1/4%': '25%',
        '1/2%': '50%',
        '3/4%': '75%',
      },
      dropShadow: {
        hero: '0 0 1rem white',
      },
    },
  },
  plugins: [],
};
