module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        patron: ['Patron'],
      },
      colors: {
        blue: '#2595cc',
      },
    },
  },
  plugins: [],
}
