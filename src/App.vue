<template>
  <div id="root">
    <layout-main />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import LayoutMain from "@/layouts/LayoutMain/index.vue";

export default Vue.extend({
  name: "App",
  components: {
    LayoutMain,
  },
});
</script>
