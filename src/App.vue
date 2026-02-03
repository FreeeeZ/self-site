<template>
  <AppLayout />
  <AppModal />
  <AppToast />
</template>

<script lang="ts" setup>
import { watch } from "vue";
import { useRoute } from "vue-router";

import { useModalStore } from "@/store/ui/modal";

import AppLayout from '@/layouts/app-layout/index.vue';
import AppModal from "@/components/ui/modals/AppModal.vue";
import AppToast from "@/components/ui/toasts/AppToast.vue";

const route = useRoute();
const modalStore = useModalStore();

watch(() => route.name, () => {
  modalStore.closeAllModals();
});
</script>
