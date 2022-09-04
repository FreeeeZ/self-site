<template>
  <AppLayout />
  <AppModal />
</template>

<script lang="ts" setup>
import AppLayout from '@/layouts/app-layout/index.vue'
import AppModal from "@/components/common/app-modal.vue";
</script>

<style lang="scss">
@use '@/assets/scss/_global/index.scss';
</style>
