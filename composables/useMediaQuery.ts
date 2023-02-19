import { onMounted, onUnmounted, ref } from "vue";
import type { Ref } from "vue";

export default function useMediaQuery(query: string): Ref<boolean> {
  const shouldRender = ref(false);
  let mediaQuery: MediaQueryList | null = null;

  function handleMediaQueryChange(event: MediaQueryListEvent): void {
    shouldRender.value = event.matches;
  }

  onMounted(() => {
    mediaQuery = window.matchMedia(query);
    shouldRender.value = mediaQuery.matches;

    if (mediaQuery) {
      mediaQuery.addEventListener("change", handleMediaQueryChange);
    }
  });

  onUnmounted(() => {
    if (mediaQuery) {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }
  });

  return shouldRender;
}
