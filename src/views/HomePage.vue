<template>
  <div class="home-page">
    <div class="home-page__wrap">
      <article class="home-page__info">
        <figure class="home-page__avatar">
          <picture>
            <source
              :srcset="require('/src/assets/img/photos/avatar.png')"
              type="image/png"
            />
            <img
              :src="require('/src/assets/img/photos/avatar.png')"
              alt="Vladislav Shell"
            />
          </picture>
          <figcaption class="home-page__avatar-title">
            Vladislav Shell
          </figcaption>
        </figure>
        <div class="home-page__description">
          <p>JavaScript developer</p>
        </div>
      </article>
      <social-list />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SocialList from "@/components/HomePage/SocialList.vue";

export default Vue.extend({
  name: "HomePage",
  components: {
    SocialList,
  },
});
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/views/home-page/index";
</style>
