/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  mode: 'jit',
  // These paths are just examples, customize them to match your project structure
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1556px',
      },
      colors: {
        'prime-light': '#FBF5F3',
        'prime-dark': '#100036',
        'prime-soft-dark': '#321d47',
        // 'prime-accent': '#A4031F',
        'prime-accent': '#F9D726',
        'gradient-top': '#100036',
        'gradient-bottom': '#2c0059',
        'nav-mobile-bg': '#001528',
        'footer-bg': '#2F2E41',
      },
      spacing: {},
      dropShadow: {},
      animation: {},
      backgroundImage: {
        'hero-image': "url('assets/Good_Profile_pic.jpg')",
      },
      backgroundSize: {
        'hero-md': '130%',
        'hero-lg': '60%',
      },
    },
    container: {},
  },
  plugins: [require('flowbite/plugin')],
};
