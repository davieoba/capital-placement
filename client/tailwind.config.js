/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'personal-info': '3px 3px 14px 0px rgba(190, 190, 190, 0.3)'
      },
      fontFamily: {
        poppins: ['poppins', 'sans-serif']
      },
      colors: {
        'save-btn': '#087b2f'
      }
    },
  },
  plugins: [],
}