// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: true,
  modules: [
    "nuxt-proxy",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "storeToRefs"],
      },
    ],
  ],

  runtimeConfig: {
    public: {
      apiBase: process.env.BASE_URL_PRODUCTION
        ? process.env.BASE_URL_PRODUCTION
        : "http://127.0.0.1:3000",
    },
  },

  // See options here https://github.com/chimurai/http-proxy-middleware#options
  proxy: {
    options: {
      target: "https://jsonplaceholder.typicode.com",
      changeOrigin: true,
      pathRewrite: {
        "^/api/": "/",
      },
      pathFilter: ["/api/**"],
    },
  },
  imports: {
    // Auto-import pinia stores defined in `~/stores`
    dirs: ["stores"],
  },

  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
