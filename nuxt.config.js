export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  html: 'og: http://ogp.me/ns#',

  googleAnalytics: {
    id: 'UA-223051454-1'
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/psdemo/',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Polaris Web Protection & Cyber Security',
    htmlAttrs: {
      lang: 'en',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      {charset: 'utf-8'},
      // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'},
      {
        property: 'og:title',
        content: 'Polaris Web Protection & Cyber Security'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:image',
        content: 'https://polarisec.com/logo.png'
      },
      {
        property: 'og:description',
        content: 'Polaris is your trusted cyber security partner providing web protection through proprietary artificial intelligence and machine learning. Deter attacks before damage is done.'
      },
      {
        property: 'og:url',
        content: 'https://polarisec.com/'
      },
      {
        property: 'og:image:type',
        content: 'image/png'
      },
      {
        property: 'og:image:width',
        content: '300'
      },
      {
        property: 'og:image:height',
        content: '300'
      },
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/styles/main.styl',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
  ],

  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

}
