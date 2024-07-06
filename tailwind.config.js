/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      
      'poppins': ["Poppins", 'sans-serif'],
    },
    extend: {
      container: {
        padding: '2rem',
      },
    },
  },
  plugins: [],
}