<template>
  <div
    class="icon-wrapper"
    :style="style"
  >
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  size: {
    type: String,
    default: null
  },
  color: {
    type: String,
    default: null
  },
});

const style = computed(() => ({
  fontSize: props.size ? props.size : '16px',
  color: props.color ? props.color : 'currentColor',
}));
</script>
