<template>
  <HomeHero />
  <HomeAbout />
  <ProjectsList :count-items-for-render="2" render-for="home-page" />
  <HomeSkills />
</template>

<script lang="ts" setup>
import HomeHero from '@/components/home/home-hero.vue';
import HomeAbout from '@/components/home/home-about.vue';
import HomeSkills from '@/components/home/home-skills.vue';
import ProjectsList from '@/components/common/projects-list.vue';
</script>
