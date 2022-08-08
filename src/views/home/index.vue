<template>
  <HomeHero data-aos="fade-down" />
  <HomeAbout data-aos="fade-left" />
  <ProjectsList :type="`home-page`" data-aos="fade-right" />
  <HomeSkills data-aos="fade-down" />
</template>

<script lang="ts" setup>
import HomeHero from '@/components/home/home-hero.vue';
import HomeAbout from '@/components/home/home-about.vue';
import HomeSkills from '@/components/home/home-skills.vue';
import ProjectsList from '@/components/_global/projects-list.vue';
</script>
