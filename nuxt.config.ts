// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css','~/assets/css/style.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    ['@nuxtjs/google-fonts', {
        families: {
          Raleway: {
            wght: '200..900',
            ital: '200..700',
          }
        }
    }],
  ],
})
