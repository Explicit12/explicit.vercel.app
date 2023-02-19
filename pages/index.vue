<script setup lang="ts">
  import { ref, computed, watch } from "vue";
  import { useFetch } from "#app";

  import useMediaQuery from "~~/composables/useMediaQuery";

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

  import type { Ref } from "vue";

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
  const { data: githubInfo } = await useFetch("/api/github");
  const inView: Ref<Element[]> = ref([]);
  const isLgAndBigger = useMediaQuery("(min-width: 1024px)");
  const isMdAndBigger = useMediaQuery("(min-width: 724px)");
  const isMobileMenuOpen = ref(false);

  const skillsToShow = computed(() => skills.slice(0, amoutSkillsToShow.value));
  const skillsInView = computed(() => {
    return Boolean(inView.value.find((el) => el.id === "skills"));
  });
  const aboutMeInView = computed(() => {
    return Boolean(inView.value.find((el) => el.id === "about-me"));
  });

  function observerHanlder(entries: IntersectionObserverEntry[]): void {
    const interactElement = entries.find(
      (entry) => entry.isIntersecting,
    )?.target;
    if (interactElement && !inView.value.includes(interactElement)) {
      inView.value.push(interactElement);
    }
  }

  watch(isLgAndBigger, (newVal) => {
    if (newVal && isMobileMenuOpen.value) {
      isMobileMenuOpen.value = false;
    }
  });
</script>

<template>
  <div class="index-page">
    <Teleport to="body">
      <ClientOnly>
        <LazyMobileMenu
          :open="isMobileMenuOpen"
          @navigation="isMobileMenuOpen = false"
          @close-mobile-menu-click="isMobileMenuOpen = false"
        />
      </ClientOnly>
    </Teleport>
    <TheHeader
      class="index-page__header"
      @open-mobile-menu-click="isMobileMenuOpen = true"
    />
    <main class="main">
      <section class="hero-screen container">
        <div class="hero-screen__content">
          <h1 class="text-h1 hero-screen__headline">
            <span class="hero-screen__subtitle">
              Hi, my name is Dmytro and I’m
            </span>
            Front End Developer
          </h1>
          <AppButton
            class="hero-screen__button"
            tag="a"
            href="https://t.me/+380636045081"
            type="primary"
          >
            Contact me
            <IconSprite icon-name="Telegram" />
          </AppButton>
        </div>
        <div class="hero-screen__character-wrapper">
          <KeepAlive>
            <HeroCharacter
              v-if="isMdAndBigger"
              class="hero-screen__character-wrapper__character"
            />
          </KeepAlive>
        </div>

        <div class="gradient">
          <img
            :src="BlurShapeSvg"
            alt="Gradient"
            class="gradient__blur-shape"
          />
          <img
            :src="BlurShapeSvg"
            alt="Gradient"
            class="gradient__blur-shape"
          />
          <img
            :src="BlurShapeSvg"
            alt="Gradient"
            class="gradient__blur-shape"
          />
        </div>
      </section>

      <section
        class="skills container"
        id="skills"
        v-interact="observerHanlder"
      >
        <div :class="{ fadeOut: !skillsInView, fadeIn: skillsInView }">
          <h2 class="text-h2 skills__headline">Technologies i work with</h2>
          <p class="text skills__text">
            In my work I mostly use Vue.js 3, TypeScript or vanilla JavaScript
            and Tailwind CSS for styling. I also open-minded to use any other
            technology to effectively and quickly solve problems.
          </p>
        </div>

        <ul class="skills__list">
          <TransitionGroup name="moveIn">
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
                loading="lazy"
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

      <section v-if="githubInfo" class="github container" id="code">
        <h2 class="text-h2 github__headline">
          But stop talking about it, look at my code in action!
        </h2>

        <div class="guthub-user">
          <img
            class="guthub-user__avatar"
            :src="githubInfo.viewer.avatarUrl"
            :alt="githubInfo.viewer.avatarUrl"
          />
          <div class="guthub-user__info">
            <h3 class="text guthub-user__info__name">
              {{ githubInfo.viewer.login }}
            </h3>
            <CustomLink class="guthub-user__link" :to="githubInfo.viewer.url">
              <IconSprite icon-name="ExternalLink" />
              {{ githubInfo.viewer.url }}
            </CustomLink>
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

      <section
        class="about-me container"
        id="about-me"
        v-interact="observerHanlder"
      >
        <div :class="{ fadeOut: !aboutMeInView, fadeIn: aboutMeInView }">
          <h2 class="text-h2 about-me__headline">Get to know me</h2>
          <p class="text about-me__text">
            I'm a passionate front-end developer from Ukraine. I've always been
            interested in web development, and after learning the basics, I
            quickly fell in love with it. When I'm not coding, I try to be up to
            date with technologies, or learning new things. With my strong
            attention to detail and problem-solving skills, I'm excited to take
            on new challenges and make a positive impact on your project.
          </p>
        </div>
      </section>

      <section class="contacts" id="contacts">
        <div class="container">
          <h2 class="text-h2 contacts__headline">Contacts</h2>
          <ul class="contacts__list">
            <li>
              <NuxtLink to="https://t.me/+380636045081" aria-label="Telegram">
                <div class="contacts__list__item">
                  <IconSprite icon-name="Telegram" width="100%" height="100%" />
                </div>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="https://www.linkedin.com/in/dmytro-holdobin/"
                aria-label="LinkedIn"
              >
                <div class="contacts__list__item">
                  <IconSprite icon-name="Linkedin" width="100%" height="100%" />
                </div>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="https://github.com/Explicit12" aria-label="GitHub">
                <div class="contacts__list__item">
                  <IconSprite icon-name="Github" width="100%" height="100%" />
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </section>
    </main>

    <TheFooter />
  </div>
</template>

<style scoped>
  .index-page__header {
    z-index: 2;
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
    display: flex;
    justify-content: space-between;
    height: 100vh;
    max-height: 900px;
    padding-top: 76px;
    position: relative;
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
    transform: rotate(120deg);
    position: absolute;
    z-index: -2;
    opacity: 0;
    max-height: 100%;
    top: -10%;

    will-change: opacity;
    animation: fadeIn 1s ease-in 0.5s forwards;
  }

  .gradient__blur-shape {
    object-fit: contain;
  }

  .gradient__blur-shape:first-child {
    transform: translateX(-160px) translateY(50%);
  }

  .gradient__blur-shape:last-child {
    transform: translateX(160px) translateY(-50%);
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
      bottom: 20%;
    }

    .hero-screen__character-wrapper::after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      min-width: 530px;
      bottom: 20%;
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

    .gradient {
      right: -10%;
    }

    .gradient__blur-shape {
      filter: blur(8px);
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
    color: var(--secondary-white);
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
  /* github styles starts */

  .github {
    padding: 80px 16px;
  }

  .github__headline {
    max-width: 976px;
    padding-bottom: 16px;
  }

  .guthub-user {
    display: flex;
    gap: 8px;
    padding-bottom: 32px;
  }

  .guthub-user__info__name {
    padding-bottom: 8px;
  }

  .guthub-user__avatar {
    max-width: 120px;
    max-height: 120px;
    border-radius: 8px;
  }

  .guthub-user__link {
    word-break: break-all;
  }

  .github__repos-list {
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }

  @media screen and (min-width: 640px) {
    .github__headline {
      padding-bottom: 42px;
    }

    .guthub-user {
      gap: 16px;
      padding-bottom: 64px;
    }

    .github__repos-list {
      gap: 24px;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (min-width: 1024px) {
    .github__repos-list {
      gap: 32px;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  /* github styles ends */
  /* ####################### */
  /* About me styles starts */

  .about-me {
    padding: 80px 16px;
  }

  .about-me__headline {
    padding-bottom: 16px;
  }

  .about-me__text {
    color: var(--secondary-white);
    max-width: 500px;
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
    }
  }

  @media screen and (min-width: 1280px) {
    .about-me__headline {
      padding-bottom: 32px;
    }

    .about-me__text {
      max-width: 966px;
    }
  }

  /* About me styles ends */
  /* ####################### */
  /* Contacts styles starts */

  .contacts {
    padding: 80px 16px;
  }

  .contacts__headline {
    padding-bottom: 16px;
  }

  .contacts {
    background: linear-gradient(
      180deg,
      rgba(241, 77, 140, 0) 0%,
      rgba(241, 77, 140, 0.2) 100%
    );
  }

  .contacts__list {
    padding: 0;
    list-style: none;
    display: flex;
    gap: 16px;
  }

  .contacts__list__item {
    max-width: 60px;
    max-height: 60px;
    background: var(--primary-black-light);
    border: 2px solid var(--primary-white);
    border-radius: 8px;
    padding: 16px;
    aspect-ratio: 1;

    transition: transform 250ms;
  }

  .contacts__list__item:hover {
    transition: transform 250ms;
    transform: translateY(-10%);
  }

  @media screen and (min-width: 640px) {
    .contacts {
      padding: 120px 16px;
    }

    .contacts__headline {
      padding-bottom: 24px;
    }

    .skills__list {
      gap: 24px;
    }
  }
</style>
