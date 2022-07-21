<template>
  <div class="skills-block">
    <div class="container">
      <h2 class="skills-block__title">Skills</h2>
      <div class="skills-block__list">
        <div class="skills-block__list-item" v-for="(skill, index) in skillsList" :key="index">
          <picture class="list-item__picture">
            <source type="image/webp" :srcset="skill.image">
            <img :src="skill.image" alt="Main photo">
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
const skillsList = [
  {
    image: '',
    title: 'JavaScript'
  },
  {
    image: '',
    title: 'Typescript'
  },
  {
    image: '',
    title: 'Vue JS'
  },
  {
    image: '',
    title: 'React JS'
  },
  {
    image: '',
    title: 'VueX'
  },
  {
    image: '',
    title: 'Pinia'
  },
  {
    image: '',
    title: 'Git'
  },
  {
    image: '',
    title: 'Figma'
  },
  {
    image: '',
    title: 'Styled Components'
  },
]
</script>

<style lang="scss" scoped>
  @use './styles/skills-block.scss';
</style>