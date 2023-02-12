<script setup lang="ts">
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
        <CustomLink :to="url" class="github-repo-card__header__headline__link">
          <IconSprite icon-name="Book" />
          {{ name }}
        </CustomLink>
      </h3>
      <span class="github-repo-card__header__start-count">
        <IconSprite icon-name="StarShape" />
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
    border: 2px solid var(--primary-white);
    border-radius: 12px;
    padding: 24px 24px 32px;

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
    gap: 32px;
    align-items: center;
  }

  .github-repo-card__header__start-count {
    line-height: 0;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .github-repo-card__header__headline,
  .github-repo-card__discription {
    margin: 0;
  }

  .github-repo-card__header {
    padding-bottom: 16px;
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
    padding-top: 18px;
    list-style: none;
    display: flex;
    gap: 16px;
    flex-wrap: wrap;

    align-self: end;
  }

  @media screen and (min-width: 640px) {
    .github-repo-card__discription {
      padding-bottom: 24px;
    }
  }
</style>
