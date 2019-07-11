module.exports = {
  head: {
    title: 'Patisserie Kamata.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'kamta no site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  server: {
    port: 3000, // デフォルト: 3000
    // host: '0.0.0.0', // デフォルト: localhost
  },
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-webfontloader'
  ],
  styleResources: {
    sass: [
      '~/assets/style/_variable.scss',
    ],
  },
  css: [
    '@/assets/style/reset.css',
  ],
  webfontloader: {
    google: {
      families: ['Noto+Sans+JP','Raleway']
    }
  },
  mode: 'universal',
}
