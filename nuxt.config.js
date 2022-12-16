export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  head: {
    title: 'wherby',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [{ rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    link: [{ rel: 'preconnect', href: 'https://fonts.gstatic.com' }],
    link: [
      {
        href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&display=swap',
        rel: 'stylesheet',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/svg-sprite',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources', '@nuxtjs/axios'],

  axios: {
    // proxy: true
  },

  styleResources: {
    scss: [
      '~/scss/variables/color.scss',
      '~/scss/mixins/_media.scss',
      '~/scss/globals.scss',
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  env: {
    BASE_API_URL: process.env.VUE_APP_API_URL,
  },
}
