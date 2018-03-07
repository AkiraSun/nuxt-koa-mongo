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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet',
        href: 'https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css',
        integrity: 'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm',
        crossorigin: 'anonymous'
      }
    ],
    script: [
      {
        src: 'https://cdn.bootcss.com/jquery/3.2.1/jquery.slim.min.js',
        integrity: 'sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN',
        crossorigin: 'anonymous'
      },
      { src: 'https://cdn.bootcss.com/popper.js/1.12.9/umd/popper.min.js',
        integrity: 'sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q',
        crossorigin: 'anonymous'
      },
      { src: 'https://cdn.bootcss.com/bootstrap/4.0.0/js/bootstrap.min.js',
        integrity: 'sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl',
        crossorigin: 'anonymous'
      }

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
  modules: [
    'bootstrap-vue/nuxt',

    // Or if you have custom bootstrap CSS...
    ['bootstrap-vue/nuxt', { css: false }]
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
  plugins: [
    {src: '~plugins/element-ui'}
    // {src: '~plugins/aliyun.js'}
  ]
}
