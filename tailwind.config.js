/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#FBCF16",
        secondary: "#142146",
        "color-main": "#10172a",
        "color-card": "#1e293b"
      },
      gridTemplateColumns: {
        'main-grid': '4fr 8fr',
      }
    },
  },
  plugins: [],
}

