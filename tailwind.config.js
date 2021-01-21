module.exports = {
 purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
       'display': ['AdobeClean',],
    },
    extend: {
      backgroundImage: theme => ({
        'hero-img': "url('Assets/Image/mdHomepage.jpeg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
