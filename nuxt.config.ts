import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  vite: {
    plugins: [
      svgLoader(),
    ],
  },
})
