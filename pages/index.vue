<script setup lang="ts">
  import BlurShapeSvg from "~/assets/svg/blur-shape.svg";
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
        <BlurShapeSvg class="gradient__blur-shape" />
        <BlurShapeSvg class="gradient__blur-shape" />
        <BlurShapeSvg class="gradient__blur-shape" />
      </div>

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
