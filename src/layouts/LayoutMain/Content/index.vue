<template>
  <main>
    <div class="container">
      <router-view />
    </div>
  </main>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "LayoutMainContent",
});
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/layouts/layout-main/index";
</style>
