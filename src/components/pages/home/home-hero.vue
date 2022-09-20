<template>
  <div class="home-hero">
    <div class="container">
      <div class="home-hero__left">
        <h4 class="home-hero__subtitle">Web developer</h4>
        <h1 class="home-hero__title">Vladislav Shell</h1>
        <p class="home-hero__description">
          Hey! Welcome to my visiting card site. I hope it will be interesting. Let's go!
        </p>
        <app-button button-type="primary" @click="openContactModal">
          Contact me
        </app-button>
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
        <picture class="home-hero__picture">
          <source type="image/webp" srcset="@/assets/images/global/scroll-arrow.webp">
          <img src="@/assets/images/global/scroll-arrow.svg" alt="Main photo" width="32">
        </picture>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { markRaw } from "vue";

import { useModalStore } from "@/store/ui/modalStore";

import AppButton from "@/components/ui/buttons/app-button.vue";
import ContactModal from "@/components/common/contact-modal.vue";

const modalStore = useModalStore();

function openContactModal () {
  modalStore.openModal({ modalName: 'contact', content: markRaw(ContactModal) });
}
</script>

<style lang="scss" scoped>
@use 'styles/home-hero';
</style>
