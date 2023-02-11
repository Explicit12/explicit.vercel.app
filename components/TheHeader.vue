<template>
  <header class="header">
    <nav class="header__navigation container">
      <CustomLink :to="{ path: '/', hash: '#home' }">
        <IconSprite icon-name="HyperLink" />
        Home
      </CustomLink>

      <AppButton
        class="header__navigation__menu-button"
        type="secondary"
        aria-label="Open mobile menu"
      >
        <IconSprite icon-name="JustifyAlignment" />
      </AppButton>
      <ul class="header__navigation__anchor-links">
        <li>
          <CustomLink :to="{ path: '/', hash: '#skills' }">
            <IconSprite icon-name="HyperLink" />
            Skills
          </CustomLink>
        </li>
        <li>
          <CustomLink :to="{ path: '/', hash: '#code' }">
            <IconSprite icon-name="HyperLink" />
            Code
          </CustomLink>
        </li>
        <li>
          <CustomLink :to="{ path: '/', hash: '#about-me' }">
            <IconSprite icon-name="HyperLink" />
            About me
          </CustomLink>
        </li>
        <li>
          <CustomLink :to="{ path: '/', hash: '#contacts' }">
            <IconSprite icon-name="HyperLink" />
            Contacts
          </CustomLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  .header {
    padding: 8px 0;
    position: sticky;
    top: 0;

    background: rgba(12, 12, 13, 0.85);
    backdrop-filter: blur(9px);
  }

  .header__navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header__navigation__anchor-links {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    .header__navigation__menu-button {
      display: none;
    }

    .header__navigation__anchor-links {
      list-style-type: none;

      padding: 0;
      width: 100%;
      max-width: 608px;

      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>
