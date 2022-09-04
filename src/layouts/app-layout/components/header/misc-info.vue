<template>
  <div class="main-header__misc-info">
    <button class="button button-primary" @click="openContactModal">
      Contact
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useModalStore } from "@/store/ui/modalStore";

const modalStore = useModalStore();

function openContactModal () {
  modalStore.openModal('contact')
}
</script>
