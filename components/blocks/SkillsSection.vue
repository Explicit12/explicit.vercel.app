<script setup lang="ts">
  import CSS3 from "~~/assets/svg/logos/css3.svg";
  import Gulp from "~~/assets/svg/logos/gulp.svg";
  import HTML5 from "~~/assets/svg/logos/html5.svg";
  import JavaScript from "~~/assets/svg/logos/javascript.svg";
  import NuxtJS from "~~/assets/svg/logos/nuxtjs.svg";
  import PostCSS from "~~/assets/svg/logos/postcss.svg";
  import SASS from "~~/assets/svg/logos/sass.svg";
  import TailwindCSS from "~~/assets/svg/logos/tailwindcss.svg";
  import TypeScript from "~~/assets/svg/logos/typescript.svg";
  import Vite from "~~/assets/svg/logos/vite.svg";
  import VueUse from "~~/assets/svg/logos/vue-use.svg";
  import VueJS from "~~/assets/svg/logos/vuejs.svg";
  import Git from "~~/assets/svg/logos/git.svg";

  const technogies = {
    VueJS,
    TypeScript,
    JavaScript,
    TailwindCSS,
    NuxtJS,
    HTML5,
    CSS3,
    Vite,
    VueUse,
    SASS,
    PostCSS,
    Git,
    Gulp,
  };
</script>

<template>
  <section class="skills container">
    <div>
      <h2 class="text-h2 skills__headline">My technical skills</h2>
      <p class="text skills__text">
        As a front-end developer, I have experience with several programming
        languages, frameworks, libraries, and other tools. Here are a few of my
        technical skills:
      </p>
    </div>
    <ul class="skills__list">
      <li
        class="skills__list__item"
        v-for="(tech, name) in technogies"
        :key="name"
        :title="name"
      >
        <component :is="tech" width="100%" height="100%" viewBox="0 0 32 32" />
      </li>
    </ul>
  </section>
</template>

<style scoped>
  .skills {
    padding: 5rem 1rem;
  }

  .skills__headline {
    color: var(--primary-white);
    padding-bottom: 1rem;
  }

  .skills__text {
    color: var(--secondary-white);
    max-width: 31.25rem;
    padding-bottom: 1.5rem;
  }

  .skills__list {
    max-width: 64rem;
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 0;
  }

  .skills__list__item {
    background: rgba(65, 184, 131, 0.15);
    border-radius: 0.5rem;
    padding: 1rem;
    max-width: 2.625rem;
    width: 100%;

    will-change: transform;
    transition: transform 250ms;
  }

  .skills__list__item:hover {
    cursor: help;
    transition: transform 250ms;
    will-change: transform;
    transform: translateY(-5%);
  }

  .skills__list__item__image {
    max-width: 7.5rem;
    max-height: 7.5rem;
    height: auto;
    aspect-ratio: 1;
  }

  @media screen and (min-width: 640px) {
    .skills__headline {
      padding-bottom: 2.625rem;
    }

    .skills__list {
      justify-content: flex-start;
    }
  }

  @media screen and (min-width: 1024px) {
    .skills__text {
      max-width: 36.75rem;
    }
  }

  @media screen and (min-width: 1280px) {
    .skills__headline {
      padding-bottom: 2rem;
    }

    .skills__text {
      max-width: 60.375rem;
    }
  }
</style>
