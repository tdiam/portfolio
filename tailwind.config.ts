import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './components/**/*.vue',
    './content/**/*.md',
    './pages/**/*.vue',
  ],
  theme: {
    fontFamily: {
      sans: ['Raleway', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
