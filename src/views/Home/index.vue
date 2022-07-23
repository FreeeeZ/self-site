<template>
  <HeroBlock />
  <AboutBlock />
  <ProjectsBlock :type="`home-page`" />
  <SkillsBlock />
</template>

<script lang="ts" setup>
import HeroBlock from '@/components/Home/hero-block.vue'
import AboutBlock from '@/components/Home/about-block.vue'
import ProjectsBlock from '@/components/Home/projects-block.vue'
import SkillsBlock from '@/components/Home/skills-block.vue'
</script>
