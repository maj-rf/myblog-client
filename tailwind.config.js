/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#202855',
        'primary-700': '#1D2147',
        'primary-600': '#2c3164;',
        'primary-400': '#3c406b;',
        'primary-300': '#4D5593',
        'primary-200': '#7982AB',
        secondary: '#5572ED',
        accent: '#09D871',
        cleanWhite: '#FFFFFF',
      },
      gridTemplateColumns: {
        fluid: 'repeat(auto-fit, minmax(20rem, 1fr))',
      },
    },
    fontFamily: {
      atkinson: ['Atkinson Hyperlegible', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
};
