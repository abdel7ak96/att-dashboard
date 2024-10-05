/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        circle: "url('src/assets/shapes/disk.svg')",
      },
      fontFamily: {
        manrope: ['Manrope'],
      },
    },
  },
  plugins: [],
  important: true,
};
