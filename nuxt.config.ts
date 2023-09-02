import svgLoader from 'vite-svg-loader'

const pageCacheOpts = {
  swr: 1 * 60 * 60,
  maxAge: 24 * 60 * 60,
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  image: {

  },
  vite: {
    plugins: [
      svgLoader(),
    ],
  },
  routeRules: {
    '/': pageCacheOpts,
    '/about': pageCacheOpts,
    '/projects/**': pageCacheOpts,
    '/contact': pageCacheOpts,
  },
  googleFonts: {
    download: false,
    families: {
      Raleway: {
        wght: [300, 400, 500, 600, 700, 800],
        ital: [500],
      },
    },
  },
})
