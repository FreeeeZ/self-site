<template>
  <header class="main-header">
    <div class="container">
      <Navigation v-if="screenBreakpointType === 'xl' || screenBreakpointType === 'lg'" />
      <NavigationMobile v-else />
      <MiscInfo />
    </div>
  </header>
</template>

<script lang="ts" setup>
import useWindowSize from "@/utility/useWindowSize";
import MiscInfo from '@/layouts/app-layout/components/header/misc-info.vue';
import Navigation from '@/layouts/app-layout/components/header/navigation.vue';
import NavigationMobile from "@/layouts/app-layout/components/header/navigation-mobile.vue";

const { screenBreakpointType } = useWindowSize();
</script>

<style lang="scss" scoped>
@use './styles/index';
</style>
