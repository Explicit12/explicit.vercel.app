<script setup lang="ts">
  defineProps<{ errorCode: number }>();
  defineEmits<{ (e: "buttonClick"): void }>();
</script>

<template>
  <div class="error">
    <section class="error__note">
      <h1 class="text-h1 error__note__headline">{{ errorCode }} Error</h1>
      <p class="text error__note__text">
        Sorry for that. It may be an internal server error or you're trying to
        reach nonexistent page.
      </p>
      <TheButton type="primary" @click="$emit('buttonClick')">
        To main page
      </TheButton>
    </section>
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
