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
      text: ["'Work Sans'"],
    },
    extend: {
      colors: {
        black: '#242424',
        blue: '#bae1ec',
        green: '#2D4A53',
        dim_white: '#ffffffde',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        header: '40px',
        xxs: '11px',
      },
    },
  },
  plugins: [],
};
