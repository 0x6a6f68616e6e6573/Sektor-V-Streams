export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sektor-streams-app',
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
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/router'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    'nuxt-windicss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: 'http://localhost:3000',
    proxy: true,
    // proxyHeaders: false,
    // credentials: false,
  },
  proxy: {
    '/api/': {
      target: 'https://sektorv.stream/api/graphql',
      pathRewrite: { '^/api/': '' },
      changeOrigin: true,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // server: {
  //   host: '0.0.0.0',
  // },
  windicss: {
    scan: {
      dirs: ['./'],
      exclude: ['node_modules', 'dist'],
    },
  },
};
