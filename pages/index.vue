<template>
  <main class="main">
    <BlocksHeroScreen id="home" />
    <BlocksSkillsSection id="skills" />
    <BlocksAboutMeSection id="code" />
    <BlocksGitHubSection id="about-me" />
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
