<template>
  <section class="about-me container">
    <div>
      <h2 class="text-h2 about-me__headline">Get to know me</h2>
      <p class="text about-me__text">
        I'm a passionate front-end developer from Ukraine. I've always been
        interested in web development, and after learning the basics, I quickly
        fell in love with it. When I'm not coding, I try to be up to date with
        ne technologies. With my strong attention to details and problem-solving
        skills, I'm excited to take on new challenges and make a positive impact
        on your project.
      </p>
    </div>
  </section>
</template>

<style scoped>
  .about-me {
    padding: 5rem 1rem;
  }

  .about-me__headline {
    padding-bottom: 1rem;
    color: var(--primary-white);
  }

  .about-me__text {
    color: var(--secondary-white);
    max-width: 31.25rem;
  }

  @media screen and (min-width: 640px) {
    .about-me__headline {
      padding-bottom: 1.5rem;
    }
  }

  @media screen and (min-width: 1024px) {
    .about-me__text {
      max-width: 36.75rem;
    }
  }

  @media screen and (min-width: 1280px) {
    .about-me__headline {
      padding-bottom: 2rem;
    }

    .about-me__text {
      max-width: 60.375rem;
    }
  }
</style>
