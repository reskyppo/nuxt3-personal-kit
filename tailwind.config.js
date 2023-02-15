/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        "blue-zodiac": {
          50: "#f2f7fd",
          100: "#e3edfb",
          200: "#c1dbf6",
          300: "#8abcef",
          400: "#4b9be5",
          500: "#247fd3",
          600: "#1663b3",
          700: "#134e91",
          800: "#144478",
          900: "#112d4e",
        },
      },
    },
  },
  plugins: [],
};
