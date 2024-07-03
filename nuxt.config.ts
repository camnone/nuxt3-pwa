import { pwa } from './config/pwa'
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '@/assets/scss/main.scss',
  ],

  modules: ['@pinia/nuxt', '@nuxtjs/i18n', "@vite-pwa/nuxt", "nuxt-icons"],
  pwa,
  compatibilityDate: '2024-07-03',
},
)