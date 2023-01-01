<template>
  <header class="main-header">
    <div class="container">
      <Navigation v-if="screenBreakpointType === 'xl' || screenBreakpointType === 'lg'" navigation-type="header" />
      <NavigationMobile v-else />
      <MiscInfo />
    </div>
  </header>
</template>

<script lang="ts" setup>
import useWindowBreakpoints from "@/utility/useWindowBreakpoints";

import Navigation from '@/layouts/app-layout/components/navigation/navigation.vue';
import MiscInfo from '@/layouts/app-layout/components/header/components/miscInfo.vue';
import NavigationMobile from "@/layouts/app-layout/components/navigation/navigationMobile.vue";

const { screenBreakpointType } = useWindowBreakpoints();
</script>

<style lang="scss" scoped>
@use './styles/index';
</style>
