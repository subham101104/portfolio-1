/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        customFont: ["MontserratCustom", "sans-serif"],
      },
      colors:{
        'customGreen': "#12D640"
      }
    },
  },
  plugins: [],
}