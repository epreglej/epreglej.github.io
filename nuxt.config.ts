export default defineNuxtConfig({
  modules: [
    "nuxt-icon",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/supabase",
    "shadcn-nuxt",
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
