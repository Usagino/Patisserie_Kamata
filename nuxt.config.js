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
    },
    extend(config, ctx) {
      config.externals = config.externals || [];
      if (!ctx.isClient) {
        config.externals.splice(0, 0, function(context, request, callback) {
          if (/^vue2-google-maps($|\/)/.test(request)) {
            callback(null, false);
          } else {
            callback();
          }
        });
      }
    }
  },
  transpile: [/^vue2-google-maps($|\/)/],

  vendor: ['vue2-google-maps'],
  server: {
    port: 3000
  },
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
  ],
  styleResources: {
    sass: [
      '@/assets/style/_variable.scss',
      '@/assets/style/_foundation.scss'
    ],
  },
  css: [
    '@/assets/style/reset.css',
  ],
  plugins: [
    { src: '~/plugins/vue-carousel', ssr: false },
    { src: '~/plugins/vue2-google-maps.js', ssr: false }
  ],
  webfontloader: {
    google: {
      families: ['Sawarabi+Mincho','kokoro','hannari','Great+Vibes']
    }
  },
  loading: '~/components/loading.vue',
  mode: 'universal',
}
