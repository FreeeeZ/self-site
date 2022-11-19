<template>
  <div class="home-hero">
    <div class="container">
      <div class="home-hero__left">
        <h4 class="home-hero__subtitle">Web developer</h4>
        <h1 class="home-hero__title">Vladislav Shell</h1>
        <p class="home-hero__description">
          Hey! Welcome to my visiting card site. I hope it will be interesting. Let's go!
        </p>
        <AppButton button-type="primary" @click="openContactModal">
          Contact me
        </AppButton>
      </div>
      <div class="home-hero__right">
        <picture class="home-hero__main-picture">
          <source type="image/webp" srcset="@/assets/images/hero/main-photo.webp">
          <img src="@/assets/images/hero/main-photo.png" alt="Main photo" width="400">
        </picture>
      </div>
    </div>
    <div class="home-hero__bottom">
      <a v-smooth-scroll class="button home-hero__arrow-button" href="#about">
        <ScrollArrowIcon color="#D7E5EC" class="home-hero__arrow" />
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AppButton from "@/components/ui/buttons/appButton.vue";
import useHomeHero from "@/components/pages/home/useHomeHero";
import ScrollArrowIcon from "@/components/icons/ScrollArrowIcon.vue";

const {
  openContactModal
} = useHomeHero();
</script>

<style lang="scss" scoped>
@use 'styles/home-hero';
</style>
