<script setup lang="ts">
  import HyperLinkIcon from "~~/assets/svg/icons/hyperlink.svg";
  import ExternalLinkIcon from "~~/assets/svg/icons/external-link.svg";

  defineProps<{ type: "hyperlink" | "external" }>();
</script>

<template>
  <NuxtLink class="link">
    <HyperLinkIcon v-if="type === 'hyperlink'" />
    <ExternalLinkIcon v-else />
    <slot />
  </NuxtLink>
</template>
