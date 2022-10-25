<template>
  <div class="main-header__misc-info">
    <AppButton button-type="primary" @click="openContactModal">
      Contact
    </AppButton>
  </div>
</template>

<script lang="ts" setup>
import { markRaw } from "vue";
import { useModalStore } from "@/store/ui/modalStore";

import AppButton from "@/components/ui/buttons/appButton.vue";
import ContactModal from '@/components/common/contactModal/contactModal.vue';

const modalStore = useModalStore();

function openContactModal () {
  modalStore.openModal({ modalName: 'contact', content: markRaw(ContactModal) });
}
</script>
