/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#212737',
        secondary: '#343434',
        accent: '#1BD9D8',
        cleanWhite: '#E6E6E6',
      },
    },
    fontFamily: {
      atkinson: ['Atkinson Hyperlegible', 'sans-serif'],
    },
  },
  plugins: [],
};
