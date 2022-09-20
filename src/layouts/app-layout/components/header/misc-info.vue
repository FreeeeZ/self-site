<template>
  <div class="main-header__misc-info">
    <app-button button-type="primary" @click="openContactModal">
      Contact
    </app-button>
  </div>
</template>

<script lang="ts" setup>
import { markRaw } from "vue";
import { useModalStore } from "@/store/ui/modalStore";

import AppButton from "@/components/ui/buttons/app-button.vue";
import ContactModal from '@/components/common/contact-modal.vue';

const modalStore = useModalStore();

function openContactModal () {
  modalStore.openModal({ modalName: 'contact', content: markRaw(ContactModal) });
}
</script>
