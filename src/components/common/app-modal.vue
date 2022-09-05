<template>
  <transition-group name="modal-slide">
    <div
      v-for="(item, index) in modalStore.openedModals"
       :key="index"
       class="modal-wrapper"
    >
      <div
        v-if="(modalStore.openedModals.length - 1) === index"
        class="modal-wrapper__overlay"
        @click="modalStore.closeModal(item)"
      />

      <div class="modal-wrapper__content">
        <slot name="header" />
        <slot />
        <slot name="footer" />
      </div>
    </div>
  </transition-group>
</template>

<script lang="ts" setup>
import { useModalStore } from "@/store/ui/modalStore";

const modalStore = useModalStore();
</script>

<style lang="scss" scoped>
@use './styles/app-modal.scss';
</style>
