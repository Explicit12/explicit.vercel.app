import type { RouterConfig } from "@nuxt/schema";
// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
  scrollBehavior(to) {
    const scrollToElement = document.querySelector(to.hash || "_");

    if (scrollToElement) {
      return {
        el: document.querySelector(to.hash),
        behavior: "smooth",
      };
    }

    return {};
  },
};
