// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/font-awesome.min.css',
    '~/assets/css/fullpage.min.css',
    '~/assets/css/style_demo.css',
    '~/assets/css/ed_style.css',
  ],
  modules: [
    '@nuxt/image',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@fullpage/nuxt-fullpage',
    'nuxt-swiper',
    //'@nuxt/devtools',
  ],
  plugins: [
    { src: "~/plugins/jquery", mode: "client" },
    { src: '~/plugins/vue-toast.js', mode: 'client' },
  ],
  buildModules: [
    "@nuxtjs/svg-sprite",
  ],
  axios: {
    baseURL: process.env.BASE_URL,
    headers: {
      common: {
        // 'Authorization': `Bearer your_access_token` 
        Accept: 'application/json',
        retry: { retries: 3 },
      }
    }
  },
  router: {
    middleware: 'auth'
  },
  // app: {
  //   pageTransition: { name: 'page', mode: 'out-in' }
  // },
  app: {
    head: {
      script: [
        // {
        //   src: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js',
        //   type: 'module',
        //   body: true
        // },
        // {
        //   src: '~/assets/js/mobile-menu.js'
        // },
        // {
        //   src: '~/assets/js/main.js'
        // },
        // {
        //   src: 'https://unpkg.com/vue-fullpage.js/dist/vue-fullpage.es.js',
        //   type: 'module',
        //   body: true
        // },
      ],
    }
  },
  render: { csp: false },
})
