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
    font-size: 12px;
    padding: 8px;
    border-radius: 8px;
    background-color: v-bind(color);
    color: var(--primary-black);
  }

  @media screen and (min-width: 1024px) {
    .language-tag {
      font-size: 16px;
    }
  }
</style>
