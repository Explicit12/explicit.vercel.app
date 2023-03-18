<script setup lang="ts">
  import useMediaQuery from "~~/composables/useMediaQuery";

  import GradinetSVG from "~~/assets/svg/gradient.svg?url";
  import GradinetSVGTablet from "~~/assets/svg/gradient-tablet.svg?url";
  import GradinetSVGMobile from "~~/assets/svg/gradient.svg?url";
  import TelegramIcon from "~~/assets/svg/icons/telegram.svg";

  const isMobile = useMediaQuery("(max-width: 640px)");
</script>

<template>
  <section class="hero-screen container">
    <div class="gradient">
      <img
        :src="GradinetSVG"
        :srcset="`${GradinetSVGMobile} 320w, ${GradinetSVGTablet} 640w, ${GradinetSVG} 1280w`"
        alt=""
      />
    </div>
    <div class="hero-screen__content">
      <h1 class="text-h1 hero-screen__headline">
        <span class="hero-screen__subtitle">
          Hi, my name is Dmytro and I’m
        </span>
        Front End Developer
      </h1>
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
  .gradient {
    position: absolute;
    z-index: -1;
    top: 0;
    transform: scale(2);
  }

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

  .hero-screen__headline {
    color: var(--primary-white);
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
  }

  @media screen and (min-width: 920px) {
    .gradient {
      transform: scale(1) translateY(-25%);
    }
  }

  @media screen and (min-width: 1280px) {
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
</style>
