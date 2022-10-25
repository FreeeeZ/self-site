<template>
  <HomeHero />
  <HomeAbout />
  <ProjectsList :count-items-for-render="2" render-for="home-page" />
  <HomeSkills />
</template>

<script lang="ts" setup>
import HomeHero from '@/components/pages/home/homeHero.vue';
import HomeAbout from '@/components/pages/home/homeAbout.vue';
import HomeSkills from '@/components/pages/home/homeSkills.vue';
import ProjectsList from '@/components/common/projectsList/projectsList.vue';
</script>
