/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 0 5px black",
        "2xl": "0 0 5px white",
      },
    },
  },
  plugins: [],
};
