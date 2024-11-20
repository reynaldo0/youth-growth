/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', 'ui-sans-serif', 'system-ui'], // Gunakan Arial sebagai default
      },
    },
  },
  plugins: [
  ],
}

