<template>
  <div class="skills-block">
    <div class="container">
      <h2 class="skills-block__title">Skills</h2>
      <div class="skills-block__list">
        <div class="skills-block__list-item" v-for="(skill, index) in skillsList" :key="index">
          <picture class="list-item__picture">
            <source type="image/webp" :srcset="skill.imageWebP">
            <img :src="skill.imageSvg" :alt="skill.title">
          </picture>
          <h2 class="list-item__title">
            {{skill.title}}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import JsIconSvg from "@/assets/images/skills/js-icon.png";
import JsIconWebP from "@/assets/images/skills/js-icon.webp";
import TsIconSvg from "@/assets/images/skills/ts-icon.png";
import TsIconWebP from "@/assets/images/skills/ts-icon.webp";
// import VueIconSvg from "@/assets/images/skills/";
// import VueIconWebP from "@/assets/images/skills/";
import ReactIconSvg from "@/assets/images/skills/react-icon.png";
import ReactIconWebP from "@/assets/images/skills/react-icon.webp";
// import VuexIconSvg from "@/assets/images/skills/";
// import VuexIconWebP from "@/assets/images/skills/";
// import PiniaIconSvg from "@/assets/images/skills/";
// import PiniaIconWebP from "@/assets/images/skills/";
import GitIconSvg from "@/assets/images/skills/git-icon.png";
import GitIconWebP from "@/assets/images/skills/git-icon.webp";
// import FigmaIconSvg from "@/assets/images/skills/";
// import FigmaIconWebP from "@/assets/images/skills/";
// import WebpackIconSvg from "@/assets/images/skills/";
// import WebpackIconWebP from "@/assets/images/skills/";
// import ViteIconSvg from "@/assets/images/skills/";
// import ViteIconWebP from "@/assets/images/skills/";

const skillsList = [
  {
    imageSvg: JsIconSvg,
    imageWebP: JsIconWebP,
    title: 'JavaScript'
  },
  {
    imageSvg: TsIconSvg,
    imageWebP: TsIconWebP,
    title: 'Typescript'
  },
  {
    imageSvg: JsIconSvg,
    imageWebP: JsIconWebP,
    title: 'Vue JS'
  },
  {
    imageSvg: ReactIconSvg,
    imageWebP: ReactIconWebP,
    title: 'React JS'
  },
  {
    imageSvg: JsIconSvg,
    imageWebP: JsIconWebP,
    title: 'VueX'
  },
  {
    imageSvg: JsIconSvg,
    imageWebP: JsIconWebP,
    title: 'Pinia'
  },
  {
    imageSvg: GitIconSvg,
    imageWebP: GitIconWebP,
    title: 'Git'
  },
  {
    imageSvg: JsIconSvg,
    imageWebP: JsIconWebP,
    title: 'Figma'
  },
  {
    imageSvg: JsIconSvg,
    imageWebP: JsIconWebP,
    title: 'Webpack'
  },
  {
    imageSvg: JsIconSvg,
    imageWebP: JsIconWebP,
    title: 'Vite'
  },
]
</script>

<style lang="scss" scoped>
  @use './styles/skills-block.scss';
</style>