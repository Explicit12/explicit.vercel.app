<script setup lang="ts">
  import { ref, computed } from "vue";

  import CSS3 from "~/assets/svg/logos/css3.svg";
  import GraphQL from "~/assets/svg/logos/graphql.svg";
  import Gulp from "~/assets/svg/logos/gulp.svg";
  import HTML5 from "~/assets/svg/logos/html5.svg";
  import JavaScript from "~/assets/svg/logos/javascript.svg";
  import NuxtJS from "~/assets/svg/logos/nuxtjs.svg";
  import Pinia from "~/assets/svg/logos/pinia.svg";
  import PostCSS from "~/assets/svg/logos/postcss.svg";
  import SASS from "~/assets/svg/logos/sass.svg";
  import TailwindCSS from "~/assets/svg/logos/tailwindcss.svg";
  import TypeScript from "~/assets/svg/logos/typescript.svg";
  import Vite from "~/assets/svg/logos/vite.svg";
  import VueUse from "~/assets/svg/logos/vue-use.svg";
  import VueJS from "~/assets/svg/logos/vuejs.svg";
  import Git from "~/assets/svg/logos/git.svg";
  import BlurShapeSvg from "~/assets/svg/blur-shape.svg";

  const skills = Object.entries({
    VueJS,
    TypeScript,
    JavaScript,
    TailwindCSS,
    NuxtJS,
    Vite,
    Pinia,
    HTML5,
    CSS3,
    VueUse,
    SASS,
    PostCSS,
    GraphQL,
    Git,
    Gulp,
  });
  const amoutSkillsToShow = ref(4);

  const skillsToShow = computed(() => skills.slice(0, amoutSkillsToShow.value));
</script>

<template>
  <div class="index-page">
    <TheHeader class="index-page__header" />
    <main class="main">
      <section class="hero-screen container">
        <div class="hero-screen__content">
          <h1 class="text-h1 hero-screen__headline">
            <span class="hero-screen__subtitle">
              Hi, my name is Dmytro and I’m
            </span>
            Front End Developer
          </h1>
          <AppButton class="hero-screen__button" type="primary">
            Contact me
            <IconSprite icon-name="Telegram" />
          </AppButton>
        </div>
        <div class="hero-screen__character-wrapper">
          <HeroCharacter class="hero-screen__character-wrapper__character" />
        </div>
      </section>

      <div class="gradient">
        <img :src="BlurShapeSvg" alt="Gradient" class="gradient__blur-shape" />
        <img :src="BlurShapeSvg" alt="Gradient" class="gradient__blur-shape" />
        <img :src="BlurShapeSvg" alt="Gradient" class="gradient__blur-shape" />
      </div>

      <section class="skills container">
        <h2 class="text-h2 skills__headline">Technologies i work with</h2>
        <p class="text skills__text">
          In my work I mostly use Vue.js 3, TypeScript or vanilla JavaScript and
          Tailwind CSS for styling. I also open-minded to use any other
          technology to effectively and quickly solve problems.
        </p>

        <ul class="skills__list">
          <TransitionGroup name="skills__list">
            <li
              class="skills__list__item"
              v-for="skill in skillsToShow"
              :key="skill[0]"
              :title="skill[0]"
            >
              <img
                :src="skill[1]"
                :alt="skill[0]"
                class="skills__list__item__image"
              />
            </li>
          </TransitionGroup>
        </ul>

        <AppButton
          class="skills__show-more-btn"
          v-if="amoutSkillsToShow === 4"
          type="secondary"
          @click="amoutSkillsToShow = skills.length"
        >
          Show the others
        </AppButton>
      </section>

      <section class="about-me container">
        <h2 class="text-h2 about-me__headline">Some words about me</h2>
        <p class="text about-me__text">
          I’m 20 years old, live in Kramatorsk, Ukraine. I began like a web
          designer, but trying to get deeper knowledge about web, I have
          discovered a world of coding and problem-solving. I have about one and
          a half year of experience as a Front End developer, working on some
          freelance and my personal projects. Also, I have an intermediate level
          of English, freely speak Russian and Ukrainian.
        </p>
        <ul class="features">
          <li class="features__item">Intermediate english level</li>
          <li class="features__item">About 1.5 year of experience</li>
          <li class="features__item">Understanding of good ui/ux</li>
        </ul>
      </section>
    </main>

    <TheFooter />
  </div>
</template>

<style scoped>
  .index-page__header {
    z-index: 2;
  }

  .text {
    color: var(--secondary-white);
  }

  .main {
    background-color: var(--primary-black);
    color: var(--primary-white);
    position: relative;
    z-index: 1;
    overflow: hidden;
    margin-top: -76px;
  }

  /* Hero screen styles starts */

  .hero-screen {
    padding-top: 76px;
    display: flex;
    justify-content: space-between;
    height: 100vh;
    max-height: 900px;
  }

  .hero-screen__subtitle {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: var(--secondary-white);
    text-transform: none;
    line-height: 1;

    padding-bottom: 16px;
    display: block;
  }

  .hero-screen__content {
    position: relative;
    z-index: 1;

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .hero-screen__character-wrapper {
    display: none;
  }

  .gradient {
    pointer-events: none;
    filter: blur(28px);
    transform: rotate(120deg);
    position: absolute;
    top: -45vh;
    z-index: -2;

    animation: fadeIn 1s ease-in 0.5s forwards;
  }

  .gradient__blur-shape {
    object-fit: contain;
  }

  .gradient__blur-shape:first-child {
    transform: translateX(-25%) translateY(50%);
  }

  .gradient__blur-shape:last-child {
    transform: translateX(25%) translateY(-50%);
  }

  @media screen and (min-width: 640px) and (min-height: 640px) {
    .hero-screen__character-wrapper {
      z-index: -1;
      position: relative;
      display: block;
      width: 100%;
    }

    .hero-screen__character-wrapper__character {
      position: absolute;
      pointer-events: none;
      min-width: 530px;
      right: 0;
      bottom: 10vh;
    }

    .hero-screen__character-wrapper::after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      min-width: 530px;
      bottom: 10vh;
      right: 0;
      z-index: 2;
      background: radial-gradient(
          49.81% 49.81% at 52.23% 100%,
          #0c0c0d 0%,
          rgba(12, 12, 13, 0) 85.45%
        ),
        linear-gradient(180deg, rgba(12, 12, 13, 0) 92.95%, #0c0c0d 100%);
    }
  }

  @media screen and (min-width: 640px) {
    .hero-screen__headline {
      padding-bottom: 24px;
    }

    .hero-screen__content {
      justify-content: center;
      align-items: flex-start;
    }
  }

  @media screen and (min-width: 1280px) {
    .gradient {
      top: 0;
    }

    .hero-screen__headline {
      padding-bottom: 32px;
    }

    .hero-screen__subtitle {
      font-size: 24px;
      padding-bottom: 24px;
    }

    .hero-screen__content {
      flex-basis: 50%;
    }
  }

  /* Hero screen styles ends */
  /* ####################### */
  /* Skills styles starts */

  .skills {
    padding: 80px 16px;
  }

  .skills__headline {
    padding-bottom: 16px;
  }

  .skills__text {
    max-width: 500px;
    padding-bottom: 24px;
  }

  .skills__list {
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 32px;
    padding: 0;
  }

  .skills__list__item {
    background: rgba(65, 184, 131, 0.15);
    border-radius: 12px;
    padding: 40px;
    max-width: 120px;
    width: 100%;

    will-change: transform, opacity;

    transition: transform 250ms;
  }

  .skills__list__item:hover {
    cursor: help;
    transition: transform 250ms;
    will-change: transform;
    transform: translateY(-5%);
  }

  .skills__list__item__image {
    width: 100%;
    max-width: 120px;
    max-height: 120px;
    height: auto;
  }

  .skills__list-enter-active,
  .skills__list-leave-active {
    transition: opacity 1s ease, transform 500ms ease-out;
  }
  .skills__list-enter-from,
  .skills__list-leave-to {
    opacity: 0;
  }

  .skills__list-enter-from {
    transform: scale(0);
  }

  @media screen and (min-width: 640px) {
    .skills__headline {
      padding-bottom: 42px;
    }
  }

  @media screen and (min-width: 1024px) {
    .skills {
      padding: 120px 16px;
    }

    .skills__text {
      max-width: 588px;
      padding-bottom: 64px;
    }
  }

  @media screen and (min-width: 1280px) {
    .skills__headline {
      padding-bottom: 32px;
    }

    .skills__text {
      max-width: 966px;
      padding-bottom: 82px;
    }
  }

  .skills__show-more-btn {
    margin: 0 auto;
  }

  /* Skills styles ends */
  /* ####################### */
  /* About me styles starts */

  .about-me {
    padding: 80px 16px;
  }

  .about-me__headline {
    padding-bottom: 16px;
  }

  .about-me__text {
    max-width: 500px;
  }

  .features {
    display: none;
  }

  @media screen and (min-width: 640px) {
    .about-me__headline {
      padding-bottom: 24px;
    }
  }

  @media screen and (min-width: 1024px) {
    .about-me {
      padding: 120px 16px;
    }

    .about-me__text {
      max-width: 588px;
      padding-bottom: 64px;
    }

    .features {
      display: block;
      list-style: none;
      padding: 0;

      display: flex;
      text-align: center;
      justify-content: space-between;
      align-items: center;

      font-family: "Inter";
      font-style: normal;
      font-weight: 900;
      font-size: 24px;
      line-height: 100%;

      text-transform: uppercase;
    }

    .features__item {
      max-width: 282px;
    }
  }

  @media screen and (min-width: 1280px) {
    .features {
      font-size: 32px;
    }

    .about-me__headline {
      padding-bottom: 32px;
    }

    .about-me__text {
      max-width: 966px;
      padding-bottom: 82px;
    }
  }
</style>
