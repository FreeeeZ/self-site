<template>
  <header>
    <div class="container">
      <div class="header__wrap">
        <a class="header__site-name" href="/">{{ getHostName }}</a>
        <button class="header__theme-changer" @click="changeTheme()">
          <picture>
            <source
              :srcset="require('/src/assets/img/layout/sun.svg')"
              type="image/png"
            />
            <img
              :src="require('/src/assets/img/layout/sun.svg')"
              alt="Change theme"
            />
          </picture>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "LayoutMainHeader",
  methods: {
    changeTheme() {
      this.$store.dispatch(
        "CHANGE_SITE_THEME",
        this.$store.getters.currentTheme === "light" ? "dark" : "light"
      );
      document
        .querySelector("html")
        .setAttribute("data-theme", this.$store.getters.currentTheme);
    },
  },
  computed: {
    getHostName() {
      return window.location.hostname;
    },
  },
});
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/layouts/layout-main/index";
@import "~@/assets/styles/layouts/layout-main/header/index";
</style>
