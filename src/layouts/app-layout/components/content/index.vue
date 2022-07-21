<template>
  <main class="main-content">
    <div :class="`${route !== undefined || null ? route.name : ''}-page`">
      <router-view />
    </div>
  </main>
</template>

<script lang="ts" setup>
import { watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

watch(() => route.name, () => {
  return route.name as String
});

</script>

<style lang="scss" scoped>

</style>