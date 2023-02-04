<template>
  <NuxtLink class="link text">
    <slot />
  </NuxtLink>
</template>

<style scoped>
  .link {
    display: flex;
    align-items: center;
    gap: 8px;

    text-decoration: none;
    transition: color 250ms;
    color: var(--primary-white);
  }

  .link:hover {
    transition: color 250ms;
    color: var(--accent-blue);
  }
</style>
