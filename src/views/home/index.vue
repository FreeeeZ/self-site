<template>
  <HomeHero />
  <HomeAbout />
  <ProjectsList :count-items-for-render="2" render-for="home-page" />
  <HomeSkills />
</template>

<script lang="ts" setup>
import HomeHero from '@/components/pages/home/home-hero.vue';
import HomeAbout from '@/components/pages/home/home-about.vue';
import HomeSkills from '@/components/pages/home/home-skills.vue';
import ProjectsList from '@/components/common/projects-list.vue';
</script>
