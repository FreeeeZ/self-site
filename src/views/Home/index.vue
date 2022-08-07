<template>
  <HomeHero />
  <HomeAbout />
  <ProjectsList :type="`home-page`" />
  <HomeSkills />
</template>

<script lang="ts" setup>
import HomeHero from '@/components/Home/home-hero.vue';
import HomeAbout from '@/components/Home/home-about.vue';
import HomeSkills from '@/components/Home/home-skills.vue';
import ProjectsList from '@/components/Global/projects-list.vue';
</script>
