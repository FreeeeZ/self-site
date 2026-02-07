<template>
  <button class="app-button button" :class="`button-${buttonType}`">
    <slot />
  </button>
</template>

<script lang="ts" setup>
defineProps({
  buttonType: {
    type: String,
    required: true,
    validator(value: string) {
      return ['primary', 'primary-with-icon'].includes(value);
    },
  },
});
</script>
