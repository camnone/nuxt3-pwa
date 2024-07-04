import { pwa } from './config/pwa'
export default defineNuxtConfig({
  devtools: { enabled: true },
  //@ts-ignore
  css: ['@/assets/scss/main.scss'],

  modules: [
    '@pinia/nuxt',
    "@vite-pwa/nuxt",
    "nuxt-icons",
    "@nuxt/image"
  ],
  ssr: false,
  production: true,

  pwa,
  compatibilityDate: '2024-07-03',
},
)