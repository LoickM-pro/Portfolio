/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        square: ['Square', 'sans-serif'],
        squareo: ['Squareo', 'sans-serif'],
        ptsans: ['PTSans', 'sans-serif'],
        porticoo: ['PorticoO', 'sans-serif'],
        porticor: ['PorticoR', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

