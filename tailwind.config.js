/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: { 
      'Light_Cyan':  'hsl(180, 52%, 96%)',
      'Grayish_Cyan': 'hsl(180, 31%, 95%)',
      'Cyan': 'hsl(180, 29%, 50%)',
      'Dark':   'hsl(180, 8%, 52%)',
      'Very_Dark': 'hsl(180, 14%, 20%)',
    },
  },
  plugins: [],
}