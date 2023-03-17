<script setup lang="ts">
  import { ref } from "vue";
  import { v4 as uuid } from "uuid";

  withDefaults(defineProps<{ animation?: boolean }>(), { animation: true });

  const componentId = uuid();
  const inView = ref("");

  function observerHanlder(entries: IntersectionObserverEntry[]): void {
    const interactElement = entries.find((entry) => entry.isIntersecting);

    if (interactElement && inView.value !== componentId) {
      inView.value = interactElement.target.id;
    }
  }
</script>

<template>
  <div
    class="show-view-container"
    v-interact="observerHanlder"
    :id="componentId"
  >
    <Transition v-if="animation" name="fade">
      <slot v-if="inView" />
    </Transition>
    <template v-else>
      <slot v-if="inView"></slot>
    </template>
  </div>
</template>

<style scoped>
  .show-view-container {
    min-height: 75vh;
  }

  .fade-enter-active,
  .fade-leave-active {
    will-change: transform, opacity;
    transition: opacity 500ms ease, transform 350ms ease-out;
  }
  .fade-enter-from,
  .fade-leave-to {
    will-change: transform, opacity;
    transform: translateY(-10%);
    opacity: 0;
  }
</style>
