/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "navy": "#293264",
        "white-color": "#F5F7FB",
        "transparent-color": "#D6DBF5",
        "green-color": "#94D7A2",
        "red-color": "#F8BCBC",
        "yellow-color": "#FFFAD1",
        "blue-color": "#DEEBF8",
        "button-background": "#4D5B9E",
      },
    },
  },
  plugins: [],
}