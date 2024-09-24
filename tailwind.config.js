/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        headings: '', // Title, Acceptance, Difficulty, Company
      },
    },
  },
  plugins: [],
}

