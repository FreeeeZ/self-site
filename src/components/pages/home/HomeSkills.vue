<template>
  <div class="home-skills">
    <div class="container">
      <h2 class="home-skills__title">Main skills</h2>
      <div class="home-skills__list">
        <div v-for="(skill, index) in skillsList" :key="index" class="home-skills__list-item">
          <picture class="list-item__picture">
            <source type="image/webp" :srcset="skill.imageWebP" />
            <img :src="skill.imageSvg" :alt="skill.title" />
          </picture>
          <h2 class="list-item__title">
            {{ skill.title }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useHomeSkills from '@/components/pages/home/useHomeSkills';

const { skillsList } = useHomeSkills();
</script>

<style lang="scss" scoped>
@use 'styles/home-skills';
</style>
