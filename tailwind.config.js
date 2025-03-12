module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      BookkMuyngjo: ['BookkMuyngjo']
    },
    screens: {
      xs: '384px',
      sm: '576px',
      // => @media (min-width: 576px) { ... }
      md: '860px',
      // => @media (min-width: 960px) { ... }
      lg: '1200px',
      // => @media (min-width: 1440px) { ... }
      xl: '1440px',

      xl2: '1920px',
    },
  },
  plugins: [],
}
