// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Dmytro Holdobin — Front End Developer",
      link: [
        {
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
      ],
    },
  },

  modules: [
    "@nuxtjs/google-fonts",
    "nuxt-purgecss",
    "@nuxtjs/html-validator",
    "nuxt-svgo",
    "nuxt-security",
    "@nuxtjs/robots",
    "@nuxt/image-edge",
  ],

  security: {
    headers: {
      contentSecurityPolicy: {
        value: {
          "img-src": ["'self'", "*.githubusercontent.com", "data:"],
        },
        route: "/**",
      },
    },
  },

  svgo: {
    svgo: false,
  },

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
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules/three/build/three.module.js")) {
              return "three";
            }
          },
        },
      },
    },
  },
});
