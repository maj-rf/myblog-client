/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F06A35',
        secondary: '#35BBF0',
      },
    },
  },
  plugins: [],
};
