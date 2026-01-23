// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-01-23',
  devtools: { enabled: true },
  nitro: {
    cloudflare: {
      deployConfig: true,
      wrangler: {
        d1_databases: [
          {
            binding: 'DB',
            database_name: 'd1-sql',
            database_id: 'f5c31d83-f039-4d50-904f-7cab4920024f'
          }
        ]
      }
    },
    prerender: {
      autoSubfolderIndex: false
    }
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: [
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/image',
    // '@nuxt/content', - for now remove till blog is added
    '@nuxt/ui',
  ],
  css: ['~/assets/css/main.css']
})