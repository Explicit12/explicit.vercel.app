<script setup lang="ts">
  import useMediaQuery from "~~/composables/useMediaQuery";

  import TelegramIcon from "~~/assets/svg/icons/telegram.svg";

  const isMobile = useMediaQuery("(max-width: 640px)");
</script>

<template>
  <section class="hero-screen container">
    <div class="hero-screen__content">
      <div>
        <h1 class="text-h1 hero-screen__headline">Dmytro Holdobin</h1>

        <p class="text hero-screen__text">
          I am a front-end developer with nearly 2 years of experience in
          developing web applications. I have some experience as freelancer and
          have several pet projects on my GitHub. I am learning new technologies
          and expanding my skills beyond front-end development.
        </p>
      </div>
      <TheButton
        class="hero-screen__button"
        tag="a"
        href="https://t.me/+380636045081"
        type="primary"
      >
        Contact me
        <TelegramIcon class="icon" />
      </TheButton>
    </div>
    <div class="hero-screen__character-wrapper">
      <KeepAlive>
        <LazyHeroCharacter
          v-if="!isMobile"
          class="hero-screen__character-wrapper__character"
        />
      </KeepAlive>
    </div>
  </section>
</template>

<style scoped>
  .hero-screen {
    display: flex;
    justify-content: space-between;
    height: 100vh;
    max-height: 900px;
    padding-top: 76px;
    position: relative;
  }

  .hero-screen__text {
    color: var(--secondary-white);
  }

  .hero-screen__headline {
    color: var(--primary-white);
    padding-bottom: 1rem;
  }

  .hero-screen__content {
    position: relative;
    z-index: 1;

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  @media screen and (min-width: 640px) and (min-height: 740px) {
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
      right: -5rem;
      bottom: 20%;
    }

    .hero-screen__character-wrapper::after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      min-width: 530px;
      bottom: 20%;
      right: -5rem;
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
    .hero-screen__text {
      padding-bottom: 2rem;
    }

    .hero-screen__content {
      justify-content: center;
      align-items: flex-start;
    }
  }

  @media screen and (min-width: 1280px) {
    .hero-screen__content {
      flex-basis: 50%;
    }
  }
</style>
