<script setup lang="ts">
  withDefaults(defineProps<{ fontSize?: number; color?: string }>(), {
    fontSize: 18,
    color: "var(--primary-white)",
  });
</script>

<template>
  <NuxtLink class="link">
    <slot />
  </NuxtLink>
</template>

<style scoped>
  .link {
    display: flex;
    align-items: center;
    gap: 8px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: v-bind(String(fontSize) + "px");

    text-decoration: none;
    transition: color 250ms;
    color: v-bind(color);
  }

  .link:hover {
    transition: color 250ms;
    color: var(--accent-blue);
  }
</style>
