export default defineNuxtConfig({
  modules: [
    "shadcn-nuxt",
    "nuxt-icon",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/supabase",
    "@vueuse/nuxt",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],
  imports: {
    dirs: ["store"],
  },
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  supabase: {
    redirectOptions: {
      login: "/login",
      callback: "/confirm",
      include: undefined,
      exclude: ["/", "/admin/overview"],
      cookieRedirect: false,
    },
  },
});
