/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
        sans: ["Amatic SC"],
    },
    extend: {
      colors: {
        // 'cyan-500-custom': '#06b6d4', // hex code for cyan-500
        // 'blue-500-custom': '#3b82f6', // hex code for blue-500
       'custom-green': '#32CD32',
      },
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
