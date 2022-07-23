<template>
  <div class="hero-block">
    <div class="container">
      <div class="hero-block__left">
        <h4 class="hero-block__subtitle">Web developer</h4>
        <h1 class="hero-block__title">Vladislav Shell</h1>
        <p class="hero-block__description">
          Hey! Welcome to my visiting card site. I hope it will be interesting. Let's go!
        </p>
        <button class="button button-primary button-soon" disabled>
          Contact Me
        </button>
      </div>
      <div class="hero-block__right">
        <picture class="hero-block__main-picture">
          <source type="image/webp" srcset="@/assets/images/hero/main-photo.webp">
          <img src="@/assets/images/hero/main-photo.png" alt="Main photo" width="400">
        </picture>
      </div>
    </div>
    <div class="hero-block__bottom">
      <a class="button hero-block__arrow-button" href="#about" v-smooth-scroll>
        <picture class="hero-block__picture">
          <source type="image/webp" srcset="@/assets/images/global/scroll-arrow.webp">
          <img src="@/assets/images/global/scroll-arrow.svg" alt="Main photo" width="32">
        </picture>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './styles/hero-block.scss';
</style>
