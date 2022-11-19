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

import Header from '@/layouts/app-layout/components/header/index.vue';
import Content from '@/layouts/app-layout/components/content/index.vue';
import Footer from '@/layouts/app-layout/components/footer/index.vue';
import ScrollToTopButton from '@/components/ui/buttons/scrollToTopButton.vue';

const isToTopShow = ref(false);

function handleScroll(){
  isToTopShow.value = window.scrollY >= 915;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
</script>

<style lang="scss" scoped>
@use './styles/index.scss';
</style>
