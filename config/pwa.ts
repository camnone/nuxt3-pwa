
import type { VitePWANuxtOptions } from '../modules/pwa/types'
import type { ModuleOptions } from '@vite-pwa/nuxt'


export const pwa: ModuleOptions = {
    manifest: false,
    workbox: {
        navigateFallback: '/',
    },

    client: {

        installPrompt: false,
    },

    filename: 'sw.ts',

    disable: false,
    devOptions: {

        enabled: false,
        type: 'module',
    },

}