<template>
  <HomeHero />
  <HomeAbout />
  <ProjectsList :count-items-for-render="2" render-for="home-page" />
  <HomeSkills />
</template>

<script lang="ts" setup>
import HomeHero from '@/components/pages/home/HomeHero.vue';
import HomeAbout from '@/components/pages/home/HomeAbout.vue';
import HomeSkills from '@/components/pages/home/HomeSkills.vue';
import ProjectsList from '@/components/common/projectsList/ProjectsList.vue';
</script>
