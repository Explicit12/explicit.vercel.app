import { defineNuxtPlugin } from "#app";

import type { DirectiveBinding } from "vue";

type ObserveHandler = (entries: IntersectionObserverEntry[]) => void;

export interface ObserveDirectiveBinding
  extends Omit<DirectiveBinding, "modifiers" | "value"> {
  value?: ObserveHandler;
}

let observer: IntersectionObserver;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("interact", {
    mounted(el, binding) {
      observer = new IntersectionObserver(binding.value, { threshold: 0.4 });
      observer.observe(el);
    },

    unmounted(el) {
      observer.unobserve(el);
    },
  });
});
