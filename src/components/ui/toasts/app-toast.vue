<template>
  <div class="toast-wrapper">
    <transition-group name="toast-slide">
      <div
        class="toast-item"
        :class="`toast-item_${toast?.toastType}`"
        role="alert"
        v-for="(toast, toastId) in toastStore?.openedToasts"
        :key="toastId"
        @click="toastStore.closeToast(toastId)"
      >
        <div class="toast-item__title" v-if="toast?.toastTitle">
          {{ toast?.toastTitle }}
        </div>
        <div class="toast-item__text" v-if="toast?.toastText">
          {{ toast?.toastText }}
        </div>
        <div class="toast-item__progress">
          <div :style="`--duration: ${toast?.toastDuration / 1000}`" />
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script setup>
import { useToastStore } from "@/store/ui/toastStore";

const toastStore = useToastStore();
</script>

<style lang="scss" scoped>
@use './styles/app-toast';
</style>
