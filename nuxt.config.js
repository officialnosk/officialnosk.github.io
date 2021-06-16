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

  loading: { color: '#fff' },
  css: ['~/assets/css/tailwind.css'],
  purgeCSS: {
    whitelist: ['dark', 'dark-mode', 'bg-nosk-green-dark'],
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
    meta: {
      name: 'NOSK',
      lang: 'en',
      description: 'Opening the mind, using open source',
      ogImage: '~/assests/svg/nosk.svg',
      ogHost: 'http://nosk.info',
    },
    manifest: {
      name: 'NOSK',
      short_name: 'Nepal Open Source Klub',
      description: 'Opening the mind, using open source',
      theme_color: '#a069e8',
    },
  },

  content: {},

  build: {},
}
