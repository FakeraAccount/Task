module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      skew: {
        '170': '170deg',
      },
      width: {
        '41': '41.875rem',
      },
      colors: {
        'orange': '#fff2e6',
        'brown': '#7e756a',
      }
    },
    backgroundImage: {
      'custom': 'radial-gradient(#f159a5 10% , #f66383 30%, #fedcbf 60%, transparent 70%)'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
