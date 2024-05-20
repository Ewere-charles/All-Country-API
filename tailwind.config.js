/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor:{
        'dark':'hsl(207, 26%, 17%)',
        'dark-element':'hsl(209, 23%, 22%)',
        'light':'hsl(0, 0%, 95%)',
        'light-element':'hsl(0, 0%, 100%)'
      },
      textColor:{
        'dark':'hsl(0, 0%, 100%)',
        'light':'hsl(200, 15%, 8%)'
      },
      borderColor:{
        'dark-input':'hsl(0, 0%, 52%)',
      },
      maxWidth:{
        'container':'1360px',
      }
    },
  },
  plugins: [],
}