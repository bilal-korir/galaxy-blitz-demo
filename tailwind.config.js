module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        patron: ['PATRON'],
      },
      colors: {
        blue: '#2595cc',
        gold: '#F4BF71',
      },
    },
  },
  plugins: [],
}
