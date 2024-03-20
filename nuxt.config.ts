export default defineNuxtConfig({
  modules: [
    "shadcn-nuxt",
    "nuxt-icon",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/supabase",
    "@pinia/nuxt",
  ],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  supabase: {
    redirectOptions: {
      login: "/login",
      callback: "/confirm",
      include: undefined,
      exclude: ["/"],
      cookieRedirect: false,
    },
  },
});
