/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: [
        'Inter',
        'system-ui',
        'Avenir',
        'Helvetica',
        'Arial',
        'sans-serif',
      ],
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        black: '#242424',
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
