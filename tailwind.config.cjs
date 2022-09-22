/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      colors: {
        'text-light': '#E5E5E5',
        'text-dark': '#eaeaea',
        'dark-clr': '#242423',
        'light-clr': '#f8f9fa',
        'accent-clr': '#ff5e5b',
      },
      spacing: {
        '1/4-h-screen': '25vh',
        '1/2-h-screen': '50vh',
        '3/4-h-screen': '75vh',
        '80-h-screen': '80vh',
        '90-h-screen': '90vh',
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
      animation: {
        'spin-slow': 'spin 30s linear infinite',
      },
      backgroundImage: {
        'yin-yang': "url('Screens/yin-yang-solid.svg')",
      },
    },
    container: {
      padding: '1rem',
    },
  },
  plugins: [require('flowbite/plugin')],
};
