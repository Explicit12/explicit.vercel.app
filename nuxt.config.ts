// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/google-fonts",
    "nuxt-purgecss",
    "@nuxtjs/html-validator",
    "nuxt-svgo",
    "nuxt-security",
    "@nuxtjs/robots",
    "@nuxt/image-edge",
  ],

  googleFonts: {
    download: true,
    families: {
      Inter: [400, 500, 700, 900],
    },
  },

  css: ["normalize.css/normalize.css", "~/assets/css/base.css"],

  typescript: {
    strict: true,
    shim: true,
  },

  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },

  imports: {
    autoImport: false,
  },
});
