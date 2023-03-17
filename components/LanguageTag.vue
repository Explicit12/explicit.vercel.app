<script setup lang="ts">
  defineProps<{ name: string; color: string }>();
</script>

<template>
  <div class="language-tag text">
    {{ name }}
  </div>
</template>

<style scoped>
  .language-tag {
    font-size: 0.75rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: v-bind(color);
    color: var(--primary-black);
  }

  @media screen and (min-width: 1024px) {
    .language-tag {
      font-size: 1rem;
    }
  }
</style>
