<template>
  <div id="app" class="app-main">
    <layout-main-header />
    <layout-main-content />
    <layout-main-footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import LayoutMainHeader from "@/layouts/LayoutMain/Header/index.vue";
import LayoutMainContent from "@/layouts/LayoutMain/Content/index.vue";
import LayoutMainFooter from "@/layouts/LayoutMain/Footer/index.vue";

export default Vue.extend({
  name: "LayoutMain",
  components: {
    LayoutMainHeader,
    LayoutMainContent,
    LayoutMainFooter,
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/styles/layouts/layout-main/index";
</style>
