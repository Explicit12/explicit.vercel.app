<script setup lang="ts">
  import { clearError } from "#app";

  interface RouteError extends Error {
    statusCode: number;
  }

  defineProps<{ error: RouteError }>();

  function handleError(): void {
    clearError({ redirect: "/" });
  }
</script>

<template>
  <div class="error">
    <section class="error__note">
      <h1 class="text-h1 error__note__headline">
        {{ error.statusCode }} Error
      </h1>
      <p class="text error__note__text">
        Sorry for that. It may be an internal server error or you're trying to
        reach nonexistent page.
      </p>
      <AppButton type="primary" @click="handleError"> To main page </AppButton>
    </section>
    <TheFooter />
  </div>
</template>

<style scoped>
  .error {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
  }

  .error__note {
    background-color: var(--primary-black);
    height: 100%;
    color: var(--primary-white);

    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .error__note__headline {
    padding-bottom: 24px;
  }

  .error__note__text {
    padding-bottom: 16px;
    max-width: 826px;
  }
</style>
