/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bhilal-dark': '#050505',
        'bhilal-gradient-1': '#1a1a1a',
        'bhilal-accent': '#00d2ff',
        'bhilal-accent-2': '#3a7bd5',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

