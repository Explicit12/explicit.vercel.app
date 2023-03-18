<script setup lang="ts">
  import { ref } from "vue";
  import { v4 as uuid } from "uuid";

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
    <div
      :class="{
        'show-view-container_hidden': !inView,
        'show-view-container_visible': inView,
      }"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .show-view-container_hidden {
    will-change: transform, opacity;
    transform: translateY(-10%);
    opacity: 0;
  }

  .show-view-container_visible {
    will-change: transform, opacity;
    transform: translateY(0%);
    opacity: 1;
    transition: 350ms;
  }
</style>
