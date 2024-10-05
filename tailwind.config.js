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
      colors: {
        'primary': '#7635DC',
        'accentPurple': '#E9DAFF',
        'accentLightPurple': '#F4F2FA',
        'textLight': '#657582',
      },
    },
  },
  plugins: [],
  important: true,
};
