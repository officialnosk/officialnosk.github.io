export default {
  target: 'static',

  head: {
    title: 'officialnosk',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['~/assets/css/tailwind.css'],
  purgeCSS: {
    whitelist: ['dark-mode', 'bg-nosk-green-dark'],
  },

  plugins: [],

  components: true,

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxt/content'],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],

  axios: {},

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  content: {},

  build: {},
}
