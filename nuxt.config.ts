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
    // https://github.com/davestewart/nuxt-content-assets
    "@nuxt/image",
    // 'nuxt-content-assets',
    // // make sure to add before content!    
    // '@nuxt/content',
    'vue3-carousel-nuxt',
  ],
  carousel: {
    prefix: 'custom',
  },
  image: {
    format: ['webp'],
  },
  // content: {
  //   highlight: {
  //     theme: 'light-plus'
  //   }
  // },
  nitro: {
    static: true,
    prerender: {
      crawlLinks: true,
    }
  }
})