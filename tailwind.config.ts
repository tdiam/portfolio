import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  theme: {
    fontFamily: {
      sans: ['Raleway', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
