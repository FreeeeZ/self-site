<template>
  <AppLayout />
  <AppModal />
  <AppToast />
</template>

<script lang="ts" setup>
import { watch } from "vue";
import { useRoute } from "vue-router";

import { useModalStore } from "@/store/ui/modalStore";

import AppLayout from '@/layouts/app-layout/index.vue';
import AppModal from "@/components/ui/modals/appModal.vue";
import AppToast from "@/components/ui/toasts/appToast.vue";

const route = useRoute();
const modalStore = useModalStore();

watch(() => route.name, () => {
  modalStore.closeAllModals();
});
</script>

<style lang="scss">
@import '@/assets/scss/_global/index.scss';
@import '@/assets/scss/_ui/index.scss';
</style>
