<template>
  <main class="main">
    <BlocksHeroScreen id="home" />
    <ShowInView id="skills">
      <BlocksSkillsSection />
    </ShowInView>
    <ShowInView id="github">
      <BlocksGitHubSection id="code" />
    </ShowInView>
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
