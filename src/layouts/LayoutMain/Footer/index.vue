<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__text">
        <p>Copyright © 2017 — {{ yearNow }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
import Vue from "vue";
import moment from "moment";

export default Vue.extend({
  name: "LayoutMainFooter",
  data() {
    return {
      yearNow: moment().format("YYYY"),
    };
  },
});
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/layouts/layout-main/index";
@import "~@/assets/styles/layouts/layout-main/footer/index";
</style>
