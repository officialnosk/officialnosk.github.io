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
    '@nuxt/image',
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

  content: {
    liveEdit: true,
  },

  build: {},
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
    },
    presets: {
      preview: {
        modifiers: {
          fit: 'cover',
          format: 'jpg',
          width: 400,
          height: 300,
        },
      },
    },
  },
}
