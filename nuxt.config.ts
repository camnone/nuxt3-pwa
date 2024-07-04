import { pwa } from './config/pwa'
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '@/assets/scss/main.scss',
  ],

  modules: [
    'nuxt-delay-hydration',
    '@pinia/nuxt',
    "@vite-pwa/nuxt",
    "nuxt-icons",
    "@nuxt/image"
  ],
  //@ts-ignore
  delayHydration: {
    // enables nuxt-delay-hydration in dev mode for testing
    debug: process.env.NODE_ENV === 'development',
    mode: 'mount'
  },
  pwa,
  compatibilityDate: '2024-07-03',
},
)