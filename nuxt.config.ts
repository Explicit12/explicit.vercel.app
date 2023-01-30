// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxtjs/apollo",
    "nuxt-purgecss",
    "@nuxtjs/html-validator",
    "nuxt-svgo",
  ],

  googleFonts: {
    download: true,
    families: {
      Inter: [400, 500, 700, 900],
    },
  },

  apollo: {
    autoImports: false,
    clients: {
      default: {
        httpEndpoint: "https://rickandmortyapi.com/graphql",
      },
    },
  },

  css: ["normalize.css/normalize.css"],
  typescript: {
    strict: true,
    shim: true,
  },

  imports: {
    autoImport: false,
  },
});
