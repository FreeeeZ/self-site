<template>
  <div class="app-layout">
    <Header />
    <Content />
    <Footer />
    <div class="scroll-top">
      <ScrollToTopButton :is-show-button="isToTopShow" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

import { BREAKPOINTS_VALUES } from "@/constants/breakpoints";

import Header from '@/layouts/app-layout/components/header/index.vue';
import Content from '@/layouts/app-layout/components/content/index.vue';
import Footer from '@/layouts/app-layout/components/footer/index.vue';
import ScrollToTopButton from '@/components/ui/buttons/ScrollToTopButton.vue';

const isToTopShow = ref(false);

function handleScroll(){
  isToTopShow.value = window.scrollY >= BREAKPOINTS_VALUES.IS_SHOW_TO_TOP_VALUE;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
</script>

<style lang="scss" scoped>
@use './styles/index.scss';
</style>
