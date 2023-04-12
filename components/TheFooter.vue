<template>
  <footer class="footer text">
    <div class="footer__wrapper container">
      <span class="footer__links">
        <NuxtLink
          to="https://github.com/Explicit12/explicit.vercel.app"
          class="footer__links__link"
          >Source Code</NuxtLink
        >
        <NuxtLink
          to="https://github.com/Explicit12/explicit.vercel.app/blob/main/LICENSE"
          class="footer__links__link"
          >License</NuxtLink
        >
      </span>

      <span class="footer__notes">
        <em>3D model by readyplayer.me</em>
        <em>Created by Dmytro Holdobin</em>
      </span>
    </div>
  </footer>
</template>

<style scoped>
  .footer {
    background-color: var(--primary-black-light);
    padding: 16px 0;
    color: var(--secondary-white);
    font-size: 16px;
    font-style: normal;
  }

  .footer__wrapper {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .footer__links {
    display: flex;
    gap: 24px;
  }

  .footer__links__link {
    color: var(--secondary-white);
    text-decoration: underline;
  }

  .footer__notes {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  @media screen and (min-width: 648px) {
    .footer__notes {
      gap: 0;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 520px;
    }
  }

  @media screen and (min-width: 1024px) {
    .footer__wrapper {
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      gap: 0;
    }
  }
</style>
