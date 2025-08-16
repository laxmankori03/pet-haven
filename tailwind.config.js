/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        darkbg: '#1E1E2F',
        card: '#2A2F4F',
        primary: '#4DD0E1',
        accent: '#FFB74D',
        text: '#F5F5F5',
        muted: '#B0BEC5',
      }
    },
  },
  plugins: [],
}
