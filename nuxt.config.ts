import { fileURLToPath } from 'url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  alias: {
    "@components": fileURLToPath(new URL('./components', import.meta.url)),
    "@types": fileURLToPath(new URL('./types', import.meta.url)),
    "@assets": fileURLToPath(new URL('./assets', import.meta.url)),
  },
  // Global CSS: https://nuxt.com/docs/api/configuration/nuxt-config#css
  css: ['@assets/styles/reset.scss', "@assets/styles/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/styles/vars.scss"; @import "~/assets/styles/utilities.scss";',
        },
      },
    },
  },
  modules: [
    '@nuxt/content',
    'vue3-carousel-nuxt',
    "@nuxt/image",
  ],
  carousel: {
    prefix: 'custom',
  },
  image: {
    format: ['webp']
  },
  content: {
    documentDriven: true,
    highlight: {
      theme: 'light-plus'
    }
  },
  nitro: {
    // define preset for nitro and which backend to serve the project
    preset: "node-server",
    prerender: {
      crawlLinks: true,
      ignore: ['/api']
    }
  },
  // Plugins to run before rendering page: https://nuxt.com/docs/api/configuration/nuxt-config#plugins-1
  plugins: [
    { src: '~/plugins/webcomponents.ts', mode: 'client' },
  ],
})