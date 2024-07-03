import { isCI, isDevelopment } from 'std-env'
import type { VitePWANuxtOptions } from '../modules/pwa/types'
import type { ModuleOptions } from '@vite-pwa/nuxt'


export const pwa: ModuleOptions = {
    manifest: false,
    workbox: {
        navigateFallback: '/',
    },
    client: {
        installPrompt: true,
    },
    srcDir: "service-worker",
    filename: 'sw.ts',

    disable: false,
    devOptions: {
        enabled: true,
        type: 'module',
    },

}