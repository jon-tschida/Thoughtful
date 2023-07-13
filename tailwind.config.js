/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "250px",
      // => @media (min-width: 640px) { ... }

      md: "350px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      dropShadow: {
        "3xl": "0 0 5px black",
        "2xl": "0 0 5px white",
      },
    },
  },
  plugins: [],
};
