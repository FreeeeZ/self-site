<template>
  <div class="main-header__misc-info">
    <AppButton button-type="primary" @click="openContactModal"> Contact </AppButton>
  </div>
</template>

<script lang="ts" setup>
import { markRaw } from 'vue';
import { useModalStore } from '@/store/ui/modal';

import AppButton from '@/components/ui/buttons/AppButton.vue';
import ContactModal from '@/components/common/contactModal/ContactModal.vue';

const modalStore = useModalStore();

function openContactModal() {
  modalStore.openModal({ modalName: 'contact', content: markRaw(ContactModal) });
}
</script>
