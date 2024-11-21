/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "text": "#008080"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

