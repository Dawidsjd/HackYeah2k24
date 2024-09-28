/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'custom-light': '0 0 1px 1px rgba(245, 245, 245, 0.2)',
      },
    },
  },
  plugins: [],
};
