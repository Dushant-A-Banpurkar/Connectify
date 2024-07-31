/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'edu-hand': ['"Edu AU VIC WA NT Hand"', 'cursive'],
      },
    },
  },
  plugins: [],
};
