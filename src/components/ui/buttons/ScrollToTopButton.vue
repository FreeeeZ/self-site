<template>
  <transition name="fade" appear>
    <button v-show="isShowButton" class="app-button button button-to-top" @click="toTop">
      <ScrollArrowIcon color="#000000" />
    </button>
  </transition>
</template>

<script lang="ts" setup>
import ScrollArrowIcon from '@/components/icons/ScrollArrowIcon.vue';

defineProps({
  isShowButton: {
    type: Boolean,
    required: true,
  },
});

function toTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
</script>
