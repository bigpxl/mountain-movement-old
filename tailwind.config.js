module.exports = {
  purge: {
    enabled: true, //Turn on when using production
    content: ["./**/*.liquid"],
    whitelist: [
      'grid-cols-1',
      'grid-cols-5'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'mm-orange':'#FF7F40',
        'mm-offblack':'#090A0F',
        'howler-orange':'#ee502d',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
