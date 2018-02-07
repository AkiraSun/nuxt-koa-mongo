module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/main.scss',
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  vendor: [
    'element-ui'
  ],
  router: {
    middleware: 'auth'
  },
  build: {
    // babel: {
    //   // plugins: [['component', [{
    //   //   libraryName: 'element-ui',
    //   //   styleLibraryName: 'theme-chalk'
    //   // },
    //   //   'transform-async-to-generator',
    //   //   'transform-runtime'
    //   // ]]]
    // },
    /*
     ** Run ESLINT on save
     */
    postcss: [
      require('postcss-nested')(),
      require('postcss-responsive-type')(),
      require('postcss-hexrgba')()
    ],
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      const vueLoader = config.module.rules.find((loader) => loader.loader === 'vue-loader')
      vueLoader.options.loaders.sass = 'vue-style-loader!css-loader!sass-loader'
    }
  },
  plugins: [{src: '~plugins/element-ui'}]
}
