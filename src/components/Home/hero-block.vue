<template>
  <div class="hero-block">
    <div class="container">
      <div class="hero-block__left">
        <h4 class="hero-block__subtitle">Web developer</h4>
        <h1 class="hero-block__title">Vladislav Shell</h1>
        <p class="hero-block__description">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.
        </p>
        <button class="button button-primary">
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

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
  @use './styles/hero-block.scss';
</style>