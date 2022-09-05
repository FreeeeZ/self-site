<template>
  <ProjectsList :count-items-for-render="projectsLength" />
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

import EX_$Projects from '@/typescript/classes/projects'
import ProjectsList from '@/components/common/projects-list.vue';

const projectsLength = ref(0)

onMounted(() => {
  projectsLength.value = EX_$Projects.projectsArr.length
})
</script>
