<script setup lang="ts">
  import { ref, watch } from "vue";
  import useMediaQuery from "~~/composables/useMediaQuery";

  const isMobileMenuOpen = ref(false);
  const isLgAndBigger = useMediaQuery("(min-width: 1024px)");

  watch(isLgAndBigger, (newVal) => {
    if (newVal && isMobileMenuOpen.value) {
      isMobileMenuOpen.value = false;
    }
  });
</script>

<template>
  <div>
    <ClientOnly>
      <Teleport to="body">
        <LazyMobileMenu
          :open="isMobileMenuOpen"
          @navigation="isMobileMenuOpen = false"
          @close-mobile-menu-click="isMobileMenuOpen = false"
        />
      </Teleport>
    </ClientOnly>
    <TheHeader @open-mobile-menu-click="isMobileMenuOpen = true" />
    <slot />
    <TheFooter />
  </div>
</template>
