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
import SocialList from './socials-list.vue';
import Navigation from './navigation.vue';
import Copyright from './copyright.vue';
</script>

<style lang="scss" scoped>
@use './styles/index.scss';
</style>
