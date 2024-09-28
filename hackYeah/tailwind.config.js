/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#111827',
        secondary: '#FCA311',
        tertiary: '#E5E5E5',
        'additional-first': '#000000',
        'additional-second': '#FFFFFF',
        neutral: '#9E9E9E',
      },
      fontFamily: {
        sans: ['Demi Sans', 'sans-serif'], // Dodanie czcionki Demi Sans
      },
      boxShadow: {
        'custom-light': '0 0 3px 2px rgba(245, 245, 245, 0.2)',
      },
    },
  },
  plugins: [],
};
