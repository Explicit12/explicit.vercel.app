<script setup lang="ts">
  import RepoIcon from "~~/assets/svg/icons/repo.svg";
  import StartIcon from "~~/assets/svg/icons/star.svg";

  defineProps<{
    name: string;
    description: string;
    url: string;
    stargazerCount: number;
    languages: {
      nodes: [{ name: string; color: string }];
    };
  }>();
</script>

<template>
  <div class="github-repo-card text">
    <header class="github-repo-card__header">
      <h3 class="github-repo-card__header__headline">
        <NuxtLink
          :to="url"
          class="link github-repo-card__header__headline__link"
        >
          <RepoIcon class="icon" />
          {{ name }}
        </NuxtLink>
      </h3>
      <span class="github-repo-card__header__start-count">
        <StartIcon class="icon" />
        {{ stargazerCount }}
      </span>
    </header>

    <p class="github-repo-card__discription">
      {{ description }}
    </p>

    <ul class="github-repo-card__languages-list">
      <li v-for="language in languages.nodes" :key="language.name">
        <LanguageTag :name="language.name" :color="language.color" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .github-repo-card {
    color: var(--secondary-white);
    background: var(--primary-black-light);
    border: 0.125rem solid var(--primary-white);
    border-radius: 12px;
    padding: 1.5rem 1.5rem 2rem;

    display: grid;
    grid-auto-rows: min-content 1fr;
    height: 100%;
    box-sizing: border-box;
  }

  .github-repo-card:hover :deep(.github-repo-card__header__headline__link) {
    color: var(--accent-blue);
  }

  .github-repo-card__header {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  .github-repo-card__header__start-count {
    line-height: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .github-repo-card__header__headline,
  .github-repo-card__discription {
    margin: 0;
  }

  .github-repo-card__header {
    padding-bottom: 1rem;
  }

  .github-repo-card__discription {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    -webkit-box-pack: end;

    height: fit-content;
  }

  .github-repo-card__languages-list {
    padding: 0;
    padding-top: 1.125rem;
    list-style: none;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;

    align-self: end;
  }

  @media screen and (min-width: 640px) {
    .github-repo-card__discription {
      padding-bottom: 1.5rem;
    }
  }
</style>
