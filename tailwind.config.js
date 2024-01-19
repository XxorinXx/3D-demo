/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#9494e5",
          50: "#f1f2fc",
          100: "#e5e8fa",
          200: "#d0d4f5",
          300: "#b3b8ee",
          400: "#9494e5",
          500: "#817ada",
          600: "#705fcc",
          700: "#604fb3",
          800: "#4e4291",
          900: "#423b74",
          950: "#282343",
        },
        boxes: {
          DEFAULT: "#27272c",
          50: "#f7f7f8",
          100: "#eeeef0",
          200: "#d9d9de",
          300: "#b8b9c1",
          400: "#91939f",
          500: "#737584",
          600: "#5d5e6c",
          700: "#4c4d58",
          800: "#41414b",
          900: "#393941",
          950: "#27272c",
        },
      },
    },
  },

  plugins: [],
};
