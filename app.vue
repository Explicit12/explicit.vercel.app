<template>
  <NuxtPage />
</template>

<style>
  .page-enter-active,
  .page-leave-active {
    transition: transform 0.4s;
  }

  .page-enter-from {
    opacity: 0;
  }

  .page-leave-to {
    opacity: 1;
  }
</style>

<style>
  body {
    background-color: var(--primary-black);
  }
</style>
