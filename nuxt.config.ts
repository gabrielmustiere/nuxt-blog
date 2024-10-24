// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [
      '@nuxt/ui-pro'
  ],
  modules: [
      "@nuxt/ui",
      "@nuxt/eslint",
      "@nuxt/content",
      "@nuxt/image",
      "@nuxt/fonts"
  ],
  compatibilityDate: "2024-10-20"
})
