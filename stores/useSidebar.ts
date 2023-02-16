export const useSidebarStore = defineStore("sidebar", {
  state: () => {
    return {
      isSidebarActive: false as boolean,
    };
  },
  actions: {
    setSidebar(isSidebarActive: boolean) {
      this.isSidebarActive = isSidebarActive;
    },
  },
});
