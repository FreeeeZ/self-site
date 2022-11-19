<template>
  <IconWrapper :color="color">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <path fill="currentColor" fill-rule="evenodd" d="M16 2a1 1 0 0 1 1 1v23.586l6.291-6.294a1.001 1.001 0 1 1 1.416 1.416l-8 8a1 1 0 0 1-1.416 0l-8-8a1.001 1.001 0 1 1 1.416-1.416L15 26.586V3a1 1 0 0 1 1-1Z" clip-rule="evenodd"/>
    </svg>
  </IconWrapper>
</template>

<script lang="ts" setup>
import IconWrapper from "@/components/icons/IconWrapper.vue";

defineProps({
  color: {
    type: String,
    default: null
  }
});
</script>
