/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#060097',
          hover: '#c10fff',
        },
        secondary: {
          DEFAULT: '#1e293b',
          light: '#67768e',
        },
        accent: '#ffcd57',
        success: '#57bf6b',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
