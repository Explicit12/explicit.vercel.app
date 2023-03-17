<script setup lang="ts">
  import TelegramIcon from "~~/assets/svg/icons/telegram.svg";
  import LinkedInIcon from "~~/assets/svg/icons/linkedin.svg";
  import GitHubIcon from "~~/assets/svg/icons/github.svg";
</script>

<template>
  <section class="contacts">
    <div class="container">
      <h2 class="text-h2 contacts__headline">Let's connect!</h2>
      <p class="text contacts__text">
        If you have any questions or would like to discuss a potential
        collaboration, please feel free to contact me via social media. Whether
        you have a project in mind or just want to say hello, I'd love to
        connect and chat.
      </p>
      <p class="text contacts__text">
        In addition, I'm actively looking for job opportunities in my field, so
        if you have any open position or would like to recommend, please don't
        hesitate to get in touch.
      </p>
      <ul class="contacts__list">
        <li>
          <NuxtLink to="https://t.me/+380636045081" aria-label="Telegram">
            <div class="contacts__list__item">
              <TelegramIcon class="icon" />
            </div>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="https://www.linkedin.com/in/dmytro-holdobin/"
            aria-label="LinkedIn"
          >
            <div class="contacts__list__item">
              <LinkedInIcon class="icon" />
            </div>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="https://github.com/Explicit12" aria-label="GitHub">
            <div class="contacts__list__item">
              <GitHubIcon class="icon" />
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
  .contacts {
    padding: 5rem 0rem;
  }

  .contacts__headline {
    padding-bottom: 1rem;
    color: var(--primary-white);
  }

  .contacts {
    background: linear-gradient(
      180deg,
      rgba(241, 77, 140, 0) 0%,
      rgba(241, 77, 140, 0.2) 100%
    );
  }

  .contacts__text {
    padding-bottom: 1rem;
    color: var(--secondary-white);
    max-width: 31.25rem;
  }

  .contacts__list {
    padding: 0;
    list-style: none;
    display: flex;
    gap: 1rem;
  }

  .contacts__list__item {
    max-width: 3.75rem;
    max-height: 3.75rem;
    background: var(--primary-black-light);
    border: 0.125rem solid var(--primary-white);
    border-radius: 0.5rem;
    padding: 1rem;
    aspect-ratio: 1;

    transition: transform 250ms;
  }

  .contacts__list__item:hover {
    transition: transform 250ms;
    transform: translateY(-10%);
  }

  @media screen and (min-width: 640px) {
    .contacts__headline {
      padding-bottom: 1.5rem;
    }

    .skills__list {
      gap: 1.5rem;
    }
  }

  @media screen and (min-width: 1024px) {
    .contacts__text {
      max-width: 36.75rem;
    }
  }

  @media screen and (min-width: 1280px) {
    .contacts__text {
      max-width: 60.375rem;
    }
  }
</style>
