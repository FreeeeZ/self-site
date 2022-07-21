<template>
  <header class="main-header">
    <div class="container">
      <Navigation />
      <MiscInfo />
    </div>
  </header>
</template>

<script lang="ts" setup>
  import Navigation from '@/layouts/app-layout/components/header/navigation.vue'
  import MiscInfo from '@/layouts/app-layout/components/header/misc-info.vue'
</script>

<style lang="scss" scoped>
  @use './styles/index';
</style>