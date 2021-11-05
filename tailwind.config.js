module.exports = {
  mode: "jit",
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          dark: "#181719",
          DEFAULT: "#828282",
          light: "#A9A9A9"
        }
      }
    },
    fontFamily: {
      "montserrat": ["Montserrat", "sans-serif"],
      "lora": ["Lora", "serif"],
      "crimson-pro": ["Crimson Pro", "serif"]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
