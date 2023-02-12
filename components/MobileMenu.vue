<script setup lang="ts">
  import { watch } from "vue";

  const props = defineProps<{ open: boolean }>();
  const emit = defineEmits<{
    (e: "navigation"): void;
    (e: "closeMobileMenuClick"): void;
  }>();

  function handleNavigation(event: Event): void {
    if ((event.target as HTMLMenuElement).tagName === "A") {
      emit("navigation");
    }
  }

  watch(
    () => props.open,
    (newVal) => {
      if (newVal && window) document.body.style.overflow = "hidden";
      else if (!newVal && window) document.body.style.overflow = "visible";
    },
  );
</script>

<template>
  <Transition name="slideIn">
    <nav class="mobile-menu" v-if="open">
      <ul class="mobile-menu__nav-list" @click="handleNavigation">
        <li>
          <CustomLink :to="{ path: '/', hash: '#home' }">
            <IconSprite icon-name="HyperLink" />
            Home
          </CustomLink>
        </li>
        <li>
          <CustomLink :to="{ path: '/', hash: '#skills' }">
            <IconSprite icon-name="HyperLink" />
            Skills
          </CustomLink>
        </li>
        <li>
          <CustomLink :to="{ path: '/', hash: '#code' }">
            <IconSprite icon-name="HyperLink" />
            Code
          </CustomLink>
        </li>
        <li>
          <CustomLink :to="{ path: '/', hash: '#about-me' }">
            <IconSprite icon-name="HyperLink" />
            About me
          </CustomLink>
        </li>
        <li>
          <CustomLink :to="{ path: '/', hash: '#contacts' }">
            <IconSprite icon-name="HyperLink" />
            Contacts
          </CustomLink>
        </li>
      </ul>
      <AppButton
        class="mobile-menu__close-btn"
        type="secondary"
        aria-label="Close mobile menu"
        @click="$emit('closeMobileMenuClick')"
      >
        <IconSprite icon-name="Cancel" />
      </AppButton>
    </nav>
  </Transition>
</template>

<style scoped>
  .mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(12, 12, 13, 0.85);
    backdrop-filter: blur(9px);
    z-index: 5;
    display: grid;
    grid-template-rows: 2fr 1fr;
  }

  .mobile-menu__nav-list {
    padding: 0;
    list-style: none;
    align-self: center;
    justify-self: center;

    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  :deep(.mobile-menu__close-btn:focus) {
    outline: none;
  }

  .slideIn-enter-active,
  .slideIn-leave-active {
    transition: opacity 250ms ease, transform 250ms ease-out;
  }
  .slideIn-enter-from,
  .slideIn-leave-to {
    opacity: 0;
    transform: translateY(-25%);
  }

  .slideIn-enter-to {
    opacity: 1;
    transform: translateY(0%);
  }
</style>
