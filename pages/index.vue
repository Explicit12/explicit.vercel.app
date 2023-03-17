<template>
  <main class="main">
    <BlocksHeroScreen id="home" />
    <ShowInView id="skills">
      <LazyBlocksSkillsSection />
    </ShowInView>
    <ShowInView id="about-me">
      <LazyBlocksAboutMeSection />
    </ShowInView>

    <BlocksGitHubSection id="code" />

    <BlocksContactsSection id="contacts" />
  </main>
</template>

<style scoped>
  .main {
    background-color: var(--primary-black);
    position: relative;
    z-index: 1;
    overflow: hidden;
    margin-top: -76px;
  }
</style>
