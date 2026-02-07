<template>
  <div class="main-footer__copyright">Vladislav Shell © {{ currentYear }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const currentYear = ref('');

currentYear.value = new Date().getFullYear().toString();
</script>

<style lang="scss" scoped>
@use '../styles/copyright';
</style>
