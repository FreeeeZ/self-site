<template>
  <footer class="main-footer">
    <div class="container">
      <SocialList />
      <Navigation />
      <Copyright />
    </div>
  </footer>
</template>

<script lang="ts" setup>
import SocialList from './components/socialList.vue';
import Navigation from './components/navigation.vue';
import Copyright from './components/copyright.vue';
</script>

<style lang="scss" scoped>
@use './styles/index.scss';
</style>
