export default {
  nitro: {
    minify: false,
  },

  build: {
    transpile: ['@vuepic/vue-datepicker']
  },

  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify',

    // With options
    ['@nuxtjs/vuetify', { /* module options */ }]
  ],

  app: {
    head: {
      title: 'InsightStream',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap' },
      ]
    },
  },

  modules: [
    '@invictus.codes/nuxt-vuetify',
  ],

  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },
  },

  moduleOptions: {
    treeshaking: true,
    useIconCDN: false,


    /* vite-plugin-vuetify options */
    styles: 'sass',
    autoImport: true,
    useVuetifyLabs: true,
  },

  css: [
    '~/assets/css/index.css',
    '~/assets/css/constants.css',
  ],

};
