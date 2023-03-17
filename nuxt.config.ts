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
