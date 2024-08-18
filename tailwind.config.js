/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    keyframes:{
      moveRight :{
        "0%":{transform:"translateX(0)"},
        "50%":{transform:"translateX(5px)"},
        "100%":{transform:"translateX(0)"},
      },
    },
    animation:{
      moveRight:"moveRight 1s ease-in-out infinite"
    },
    colors:{
      primary100:"#67dbda",
      primary200:"#42b0d1",
      primary300:"#acc2ef",
      accent100:"#3D5A80",
      accent200:"#cee8ff",
      text100:"#FFFFFF",
      text200:"#e0e0e0",
      bg100:"#0F1C2E",
      bg200:"#1f2b3e",
      bg300:"#374357",
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
    }
  },
  plugins: [],
}

