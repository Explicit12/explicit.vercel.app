<script setup lang="ts">
  import { computed } from "vue";

  const props = withDefaults(
    defineProps<{
      type: "primary" | "secondary";
      tag?: string;
    }>(),
    { tag: "button" },
  );

  const isPrimary = computed(() => props.type === "primary");
</script>

<template>
  <component
    :is="tag"
    type="button"
    class="button"
    :class="{
      button_primary: isPrimary,
      button_secondary: !isPrimary,
    }"
  >
    <slot />
  </component>
</template>

<style scoped>
  .button {
    border: none;
    outline: none;
    background: none;
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    padding: 18px 24px;
    border-radius: 8px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    text-transform: uppercase;
    color: var(--primary-white);
  }

  .button:hover:not(:disabled) {
    cursor: pointer;
  }

  .button:focus {
    outline: var(--accent-light) solid 2px;
  }

  .button_block {
    width: 100%;
  }
  .button_primary {
    transition: box-shadow 250ms;
    background-color: var(--accent);
  }

  .button_primary:hover,
  .button_primary:focus {
    transition: box-shadow 250ms;
    box-shadow: 0px 8px 19px rgba(255, 0, 98, 0.32);
    outline: var(--accent-light) solid 2px;
  }

  .button_primary:disabled {
    background-color: var(--secondary-black);
    color: var(--secondary-white);
  }

  .button_secondary {
    color: var(--primary-white);
  }

  .button_secondary:disabled {
    color: var(--secondary-white);
  }
</style>
