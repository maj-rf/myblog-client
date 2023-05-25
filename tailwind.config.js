/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#212737',
        secondary: '#374254',
        accent: '#1BD9D8',
        cleanWhite: '#E6E6E6',
      },
      gridTemplateColumns: {
        fluid: 'repeat(auto-fit, minmax(20rem, 1fr))',
      },
    },
    fontFamily: {
      atkinson: ['Atkinson Hyperlegible', 'sans-serif'],
    },
  },
  plugins: [],
};
