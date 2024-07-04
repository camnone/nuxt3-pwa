
import type { ModuleOptions } from '@vite-pwa/nuxt'
export const pwa: ModuleOptions = {
    manifest: false,
    workbox: {
        navigateFallback: '/',
    },

    client: {

        installPrompt: false,
    },
    minify: true,
    filename: 'sw.ts',
    disable: false,
    devOptions: {

        enabled: false,
        type: 'module',
    },

}