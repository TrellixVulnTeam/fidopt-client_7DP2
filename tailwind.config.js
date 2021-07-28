module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
    },
    },
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
    'caveat': ['Caveat','cursive']}
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
