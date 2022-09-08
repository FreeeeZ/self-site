<template>
  <div class="main-header__misc-info">
    <button class="button button-primary" @click="openContactModal">
      Contact
    </button>
  </div>
</template>

<script lang="ts" setup>
import { markRaw } from "vue";
import { useModalStore } from "@/store/ui/modalStore";

import ContactModal from '@/components/common/contact-modal.vue'

const modalStore = useModalStore();

function openContactModal () {
  modalStore.openModal({ modalName: 'contact', content: markRaw(ContactModal) })
}
</script>
