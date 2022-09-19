<template>
  <transition-group name="modal-slide">
    <div
      v-for="(modal, index) in modalStore?.openedModals"
      :key="index"
      class="modal-wrapper"
    >
      <div
        v-if="(modalStore?.openedModals?.length - 1) === index"
        class="modal-wrapper__overlay"
        @click="modalStore?.closeModal(modal?.modalName)"
      />

      <div class="modal-wrapper__content">
        <component
          v-bind="modal?.props"
          :is="modal?.content"
          v-if="modal?.content"
        />
      </div>
    </div>
  </transition-group>
</template>

<script lang="ts" setup>
import { computed, watch } from "vue";

import { useModalStore } from "@/store/ui/modalStore";

const modalStore = useModalStore();

const modalIsOpen = computed(() => modalStore?.openedModals?.length !== 0);

watch(() => modalIsOpen.value, (value) => {
  const documentElement = document.documentElement;

  if (documentElement) {
    if (value) {
      documentElement.classList.add('page-locked');
    } else {
      documentElement.classList.remove('page-locked');
    }
  }
});
</script>

<style lang="scss" scoped>
@use './styles/app-modal';
</style>
