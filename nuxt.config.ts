// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      api: "https://mmh.dmenu.kz/api",
      apiKey: "API-8780e73eb687d591fb170849153734525df55db0",
    },
  },
  modules: ["@nuxtjs/color-mode", "@pinia/nuxt"],
  colorMode: {
    preference: "system",
    storageKey: "color-mode",
    classSuffix: "",
  },
  css: ["~/assets/scss/app.scss", "~/assets/css/raleway.css"],
});
