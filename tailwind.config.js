/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      extend: {
        // Custom CSS for the underline effect
        keyframes: {
          underline: {
            '0%': { width: '0%' },
            '100%': { width: '100%' },
          },
        },
        animation: {
          underline: 'underline 1s ease-in-out forwards',
        },
      },
  },
  plugins: [
    require('daisyui'),
  ],
}

