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
import Navigation from '@/layouts/app-layout/components/navigation/Navigation.vue';
import Copyright from '@/layouts/app-layout/components/footer/components/Copyright.vue';
import SocialList from '@/layouts/app-layout/components/footer/components/SocialList.vue';
</script>

<style lang="scss" scoped>
@use './styles/index.scss';
</style>
