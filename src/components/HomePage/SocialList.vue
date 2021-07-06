<template>
  <article class="home-page__social-list">
    <a
      v-for="(socialItem, index) in socialList"
      :key="index"
      :href="socialItem.socialLink"
      rel="noopener noreferrer"
      :target="socialItem.options.target"
    >
      <picture>
        <source
          :srcset="
            require(`/src/assets/img/socials/${socialItem.socialName}.svg`)
          "
          type="image/svg"
        />
        <img
          :src="require(`/src/assets/img/socials/${socialItem.socialName}.svg`)"
          :alt="socialItem.socialName"
        />
      </picture>
    </a>
  </article>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "SocialList",
  data() {
    return {
      socialList: [
        {
          socialName: "tg",
          socialLink: "https://t.me/shellvladik",
          options: {
            target: "_blank",
          },
        },
        {
          socialName: "vk",
          socialLink: "https://vk.com/shellvladik",
          options: {
            target: "_blank",
          },
        },
        {
          socialName: "ig",
          socialLink: "https://instagram.com/shellvladik",
          options: {
            target: "_blank",
          },
        },
        {
          socialName: "gh",
          socialLink: "https://github.com/FreeeeZ",
          options: {
            target: "_blank",
          },
        },
        {
          socialName: "em",
          socialLink: "mailto:vladislav-shell@smartworld.team",
          options: {
            target: "",
          },
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/styles/views/home-page/social-list/index";
</style>
