/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightCyan: 'hsl(180, 52%, 96%)',
        grayishCyan: 'hsl(180, 31%, 95%)',
        cyan: 'hsl(180, 29%, 50%)',
        dark: 'hsl(180, 8%, 52%)',
        veryDark: 'hsl(180, 14%, 20%)',
      },
    },
  },
  plugins: [],
}
