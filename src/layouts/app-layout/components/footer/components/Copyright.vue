<template>
  <div class="main-footer__copyright">
    Vladislav Shell © {{currentYear}}
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

const currentYear = ref('');

onMounted(() => {
  const localCurrentYear = new Date().getFullYear();
  currentYear.value = localCurrentYear.toString();
});
</script>

<style lang="scss" scoped>
@use '../styles/copyright';
</style>
