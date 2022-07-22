<template>
  <div class="main-footer__copyright">
    Vladislav Shell © {{currentYear}}
  </div>
</template>

<script lang="ts" setup>
  const currentYear = new Date().getFullYear();
</script>

<style lang="scss" scoped>
  @use './styles/copyright.scss';
</style>