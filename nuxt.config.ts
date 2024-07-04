import { pwa } from './config/pwa'
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '@/assets/scss/main.scss',
  ],

  modules: [
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    "@vite-pwa/nuxt",
    "nuxt-icons",
    "@nuxt/image"
  ],
  pwa,
  compatibilityDate: '2024-07-03',
},
)