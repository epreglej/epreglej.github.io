export const usePageTitleStore = defineStore("pageTitle", {
  state: () => ({
    title: "", // Set a default title
  }),
  actions: {
    setTitle(newTitle: string) {
      this.title = newTitle;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePageTitleStore, import.meta.hot));
}
