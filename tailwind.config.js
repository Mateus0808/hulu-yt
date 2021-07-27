module.exports = {
  // mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screen: {
        '3xl': '2000px'
      },
      gradientColorStops: theme => ({
        'esmaecer': '#06202A'
      })
    }
  },
  variants: ['responsive ', 'group-hover', 'active', 'hover', 'focus'],
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
