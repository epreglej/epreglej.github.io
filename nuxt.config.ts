export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/beercss@3.5.1/dist/cdn/beer.min.css",
        },
      ],
      script: [
        {
          type: "module",
          src: "https://cdn.jsdelivr.net/npm/beercss@3.5.1/dist/cdn/beer.min.js",
        },
        {
          type: "module",
          src: "https://cdn.jsdelivr.net/npm/material-dynamic-colors@1.1.0/dist/cdn/material-dynamic-colors.min.js",
        },
      ],
    },
  },
  css: ["~/assets/css/additions.css"],
});
