<script setup lang="ts">
  import MenuIcon from "~~/assets/svg/icons/menu.svg";

  defineEmits<{ (event: "openMobileMenuClick"): void }>();
</script>

<template>
  <header class="header">
    <nav class="header__navigation container">
      <IconLink type="hyperlink" :to="{ path: '/', hash: '#home' }">
        Home
      </IconLink>

      <TheButton
        class="header__navigation__menu-button"
        type="secondary"
        aria-label="Open mobile menu"
        @click="$emit('openMobileMenuClick')"
      >
        <MenuIcon class="icon" />
      </TheButton>

      <ul class="header__navigation__anchor-links">
        <li>
          <IconLink type="hyperlink" :to="{ path: '/', hash: '#skills' }">
            Skills
          </IconLink>
        </li>
        <li>
          <IconLink type="hyperlink" :to="{ path: '/', hash: '#code' }">
            Code
          </IconLink>
        </li>
        <li>
          <IconLink type="hyperlink" :to="{ path: '/', hash: '#about-me' }">
            About me
          </IconLink>
        </li>
        <li>
          <IconLink type="hyperlink" :to="{ path: '/', hash: '#contacts' }">
            Contacts
          </IconLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  .header {
    padding: 0.5rem 0;
    position: sticky;
    top: 0;
    z-index: 2;

    background: rgba(12, 12, 13, 0.85);
    backdrop-filter: blur(8px);
  }

  .header__navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header__navigation__anchor-links {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    .header__navigation__menu-button {
      display: none;
    }

    .header__navigation__anchor-links {
      list-style-type: none;

      padding: 0;
      width: 100%;
      max-width: 38rem;

      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>
