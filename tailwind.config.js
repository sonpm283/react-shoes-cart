/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wave: 'wave 8s ease-in-out infinite alternate'
      },
      keyframes: {
        wave: {
          '0%': {
            transform: 'translate(-50%) skew(0,-8deg)'
          },
          '100%': {
            transform: 'translate(-30%) skew(8deg,-4deg)'
          }
        },
      }
    },
  },
  plugins: [],
}

