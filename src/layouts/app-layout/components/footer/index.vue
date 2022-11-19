<template>
  <footer class="main-footer">
    <div class="container">
      <SocialList />
      <Navigation navigation-type="footer" />
      <Copyright />
    </div>
  </footer>
</template>

<script lang="ts" setup>
import SocialList from '@/layouts/app-layout/components/footer/components/socialList.vue';
import Navigation from '@/layouts/app-layout/components/navigation/navigation.vue';
import Copyright from '@/layouts/app-layout/components/footer/components/copyright.vue';
</script>

<style lang="scss" scoped>
@use './styles/index.scss';
</style>
