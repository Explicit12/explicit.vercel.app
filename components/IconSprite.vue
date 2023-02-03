<script setup lang="ts">
  withDefaults(
    defineProps<{ iconName: string; height?: number; width?: number }>(),
    { height: 24, width: 24 },
  );
</script>

<template>
  <svg class="icon">
    <use :xlink:href="`/svg/icon-sprites.svg#${iconName}`" />
  </svg>
</template>

<style scoped>
  .icon {
    width: v-bind(String(width) + "px");
    height: v-bind(String(height) + "px");
  }
</style>
