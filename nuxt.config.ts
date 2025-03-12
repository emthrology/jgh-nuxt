// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  imports: {
    autoImport: true
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NODE_ENV === 'development'
        ? process.env.NUXT_API_BASE
        : process.env.NUXT_API_BASE,
      kakaoJsKey: process.env.KAKAO_JAVASCRIPT_KEY
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', 'nuxt-swiper', '@stefanobartoletti/nuxt-social-share'],
  plugins: [
    { src: '~/plugins/v-calendar', mode: 'client' }
  ],
  css: ['~/assets/css/fonts.css'],
  i18n: {
    vueI18n: './i18n/i18n.config.js'
  },
  routeRules: {
    '/': { redirect: '/main' }
  },
  socialShare: {
    baseUrl: 'https://www.jayuvillage.com' // required!
    // other optional module options
  },
  app: {
    head: {
      title:'전광훈 - 광화문 국민의장',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
        {name: "title", content: "전광훈 - 광화문 국민의장"},
        {
          property: 'og:title',
          content: '전광훈 - 광화문 국민의장'
        },
        // {
        //   property: 'og:image',
        //   content: '/condemn.png'
        // },
        // { name:'naver-site-verification', content: "93e062b2e167c3ce8c814169a79eab78aae0bfe7"},
        // { name:"google-site-verification", content: "KJiuCWaTHznUSWdJDAiWFnMz7A8unrpcpEMrArae6T4" },
      ],
      script: [
        { src: 'https://developers.kakao.com/sdk/js/kakao.min.js' }
      ]
    },
  },
})