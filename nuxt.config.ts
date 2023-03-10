// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Dmytro Holdobin — Front End Developer",
      link: [
        {
          name: "link",
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
        },
      ],
      meta: [
        { charset: "UTF-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        {
          name: "description",
          content: "Personal site of front end developer Dmytro Holdobin",
        },
        { name: "theme-color", content: "#0C0C0D" },
        { name: "ICBM", content: "49.04791247867182, 31.0413272122303" },
        {
          name: "geo.position",
          content: "49.04791247867182; 31.0413272122303",
        },
      ],
    },

    pageTransition: { name: "page", mode: "out-in" },
  },

  modules: ["@nuxtjs/google-fonts", "nuxt-purgecss", "@nuxtjs/html-validator"],

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

  vite: {
    assetsInclude: "**/*.glb",
    optimizeDeps: {
      exclude: ["three"],
    },
    build: {
      rollupOptions: {
        manualChunks(id) {
          if (id.includes("node_modules/three/")) {
            return "three";
          }
        },
      },
    },
  },
});
