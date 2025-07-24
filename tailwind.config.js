/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors:{
       cream:'#FFFBDE',
        light_sky:'#91C8E4',
        sky:'#749BC2',
        dark_sky:'#4682A9'
       }
    },
  },
  plugins: [],
}