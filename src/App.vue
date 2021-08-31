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
  methods: {
    setInitialTheme() {
      document.addEventListener("DOMContentLoaded", () => {
        document
          .querySelector("html")
          .setAttribute("data-theme", this.$store.getters.currentTheme);
      });
    },
  },
  created() {
    this.setInitialTheme();
  },
});
</script>

<style lang="scss">
@import "~@/assets/styles/_normalize/index";
</style>
