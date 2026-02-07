<template>
  <ProjectsList :count-items-for-render="projectsLength" />
</template>

<script lang="ts" setup>
import useProjects from '@/pages/projects/useProjects';

import ProjectsList from '@/components/common/projectsList/ProjectsList.vue';

const { projectsLength } = useProjects();
</script>
