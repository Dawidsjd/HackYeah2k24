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
        sans: ['Demi Sans', 'sans-serif'],
      },
      boxShadow: {
        'custom-light': '0 0 3px 2px rgba(245, 245, 245, 0.2)',
        'custom-hover': '0 0 3px 2px rgba(245, 245, 245, 0.4)',
      },
      backgroundImage: {
        'tail-gradient': `linear-gradient(
          235deg,
          hsl(37deg 98% 53%) 0%,
          hsl(37deg 91% 52%) 0%,
          hsl(37deg 85% 50%) -1%,
          hsl(37deg 82% 49%) -1%,
          hsl(36deg 80% 48%) -1%,
          hsl(36deg 78% 46%) -1%,
          hsl(36deg 76% 44%) -1%,
          hsl(35deg 74% 43%) -1%,
          hsl(35deg 71% 41%) -1%,
          hsl(34deg 68% 39%) 0%,
          hsl(34deg 65% 37%) 1%,
          hsl(33deg 62% 34%) 2%,
          hsl(32deg 57% 32%) 5%,
          hsl(31deg 51% 29%) 9%,
          hsl(28deg 42% 25%) 16%,
          hsl(20deg 26% 20%) 36%,
          hsl(221deg 39% 11%) 100%
        )`,
      },
    },
  },
  plugins: [require('daisyui')],
};
