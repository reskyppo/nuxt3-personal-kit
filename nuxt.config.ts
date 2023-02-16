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
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
