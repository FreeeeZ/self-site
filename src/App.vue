<template>
  <AppLayout />
</template>

<script lang="ts" setup>
// @ts-ignore
import AOS from 'aos'
import { onMounted } from 'vue';
import AppLayout from '@/layouts/app-layout/index.vue'

onMounted(() => {
  AOS.init()
})
</script>

<style lang="scss">
@use '@/assets/scss/_global/index.scss';
</style>
