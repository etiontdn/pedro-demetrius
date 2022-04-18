module.exports = {
  mode: 'jit',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./assets/css/*.css",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: '#FAA726',
          green: '#E0F1E1',
          white: '#FAFAFA'
        },
        text: {
          dark: '#424242',
          light: '#727272'
        }
      },
      fontFamily: {
        text: ['Libre Baskerville', 'serif'],
        subtitle: ['Raleway', 'sans-serif'],
        title: ['Atlantic Cruise', 'sans-serif']
      },
      fontSize: {
        subtitle: '1.75rem',
        title: '2.626rem',
        'subtitle-big': '2.25rem',
        'title-big': '4.5rem'
      },
      letterSpacing: {
        titles: '0.04em'
      },
      lineHeight: {
        title: '1.3',
        subtitle: '1.4',
        text: '1.5'
      }
    },
  },
  plugins: [],
}
