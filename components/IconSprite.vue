<script setup lang="ts">
  import { computed } from "vue";

  const props = withDefaults(
    defineProps<{
      iconName: string;
      height?: number | string;
      width?: number | string;
    }>(),
    { height: 24, width: 24 },
  );

  const finalWidth = computed(() =>
    typeof props.width === "string" ? props.width : String(props.width) + "px",
  );

  const finalHeight = computed(() =>
    typeof props.height === "string"
      ? props.height
      : String(props.height) + "px",
  );
</script>

<template>
  <svg class="icon">
    <use :xlink:href="`/svg/icon-sprites.svg#${iconName}`" />
  </svg>
</template>

<style scoped>
  .icon {
    width: v-bind(finalWidth);
    height: v-bind(finalHeight);
  }
</style>
