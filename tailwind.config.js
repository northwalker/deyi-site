/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        fadeInUp: 'fadeInUp 0.4s linear',
        ripple: 'ripple 0.4s linear',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: 0,
            transform: 'translateY(12px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0px)',
          },
        },
        ripple: {
          from: {
            transform: 'scale(0)',
            opacity: 1,
          },
          to: {
            transform: 'scale(4)',
            opacity: 0,
          },
        },
      },
      colors: {
        primary: '#0088FF',
        secondary: '#005FB3',
        'title-color': '#DBDFDF',
        'text-color': '#DFDFDB',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
