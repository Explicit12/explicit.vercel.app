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
  <TheError :error-code="error.statusCode" @button-click="handleError" />
</template>
