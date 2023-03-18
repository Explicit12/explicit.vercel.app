<script setup lang="ts">
  import { useFetch } from "#app";

  const { data: githubInfo } = await useFetch("/api/github");
</script>

<template>
  <section v-if="githubInfo" class="github container">
    <h2 class="text-h2 github__headline">
      Discover My Github Projects and Contributions!
    </h2>

    <div class="guthub-user">
      <NuxtImg
        crossorigin="anonymous"
        class="guthub-user__avatar"
        width="120"
        height="120"
        :src="githubInfo.viewer.avatarUrl"
        alt="Github avatar"
      />
      <div class="guthub-user__info">
        <h3 class="text guthub-user__info__name">
          {{ githubInfo.viewer.login }}
        </h3>
        <IconLink
          class="guthub-user__link"
          type="external"
          :to="githubInfo.viewer.url"
        >
          {{ githubInfo.viewer.url }}
        </IconLink>
      </div>
    </div>

    <ul class="github__repos-list">
      <li
        class="github__repos-list__item"
        v-for="repo in githubInfo.viewer.pinnedItems.nodes"
        :key="repo.name"
      >
        <GithubRepoCard
          :name="repo.name"
          :description="repo.description"
          :url="repo.url"
          :stargazer-count="repo.stargazerCount"
          :languages="repo.languages"
        />
      </li>
    </ul>
  </section>
</template>

<style scoped>
  .github {
    padding: 5rem 1rem;
  }

  .github__headline {
    max-width: 61rem;
    padding-bottom: 1rem;
    color: var(--primary-white);
  }

  .guthub-user {
    display: flex;
    gap: 0.5rem;
    padding-bottom: 2rem;
  }

  .guthub-user__info__name {
    padding-bottom: 0.5rem;
    color: var(--primary-white);
  }

  .guthub-user__avatar {
    max-width: 7.5rem;
    max-height: 7.5rem;
    border-radius: 0.5rem;
  }

  .guthub-user__link {
    word-break: break-all;
  }

  .github__repos-list {
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media screen and (min-width: 640px) {
    .github__headline {
      padding-bottom: 2.625rem;
    }

    .guthub-user {
      gap: 1rem;
      padding-bottom: 4rem;
    }

    .github__repos-list {
      gap: 1.5rem;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (min-width: 1024px) {
    .github__repos-list {
      gap: 2rem;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>
