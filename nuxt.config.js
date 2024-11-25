// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  plugins: ['~/plugins/splide.client.js'],
  modules: ['@nuxtjs/tailwindcss','@nuxt/image'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css', // Corrected: cssPath should be a string
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  }
})