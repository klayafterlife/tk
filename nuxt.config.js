export default {
  ssr: false,

  head: {
    title: 'Text Kepler',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: []
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [],

  modules: [
    'bootstrap-vue/nuxt',
  ],

  build: {
    extend (config) {
      config.node= {
         fs: 'empty'
       }
   }
  }
}
