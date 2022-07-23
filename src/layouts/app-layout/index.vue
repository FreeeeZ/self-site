<template>
  <div class="app-layout">
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from '@/layouts/app-layout/components/header/index.vue'
import Content from '@/layouts/app-layout/components/content/index.vue'
import Footer from '@/layouts/app-layout/components/footer/index.vue'
</script>

<style lang="scss" scoped>
@use './styles/index.scss'
</style>
