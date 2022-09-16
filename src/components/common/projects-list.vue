<template>
  <div class="projects-list">
    <div class="container">
      <h2 class="projects-list__title">Projects</h2>
      <div class="projects-list__items">
        <div
          class="projects-list__items-point"
          v-for="(project, index) in countItemsForRender ? projectsArr?.slice(0, countItemsForRender) : projectsArr"
          :key="index"
        >
          <div class="list-item__info">
            <h2 class="list-item__info-title">
              <a rel="noopener noreferrer nofollow"
                 :href="project?.html_url"
                 target="_blank"
              >
                {{ project?.name }}
              </a>
            </h2>
            <div class="list-item__info-tags" v-if="project?.tags">
              <div class="list-item__info-tags-item" v-for="(tag, index) in Object.keys(project?.tags)" :key="index">
                {{ tag }}
              </div>
            </div>
            <p class="list-item__info-description" v-if="project?.description">
              {{ project?.description }}
            </p>
          </div>
        </div>
      </div>
      <div class="projects-list__bottom" v-if="renderFor === 'home-page'">
        <router-link to="/projects" class="button button-primary">
          SEE ALL PROJECTS
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

import EX_$Projects from '@/typescript/classes/projects'
import { IProjectObject } from "@/typescript/interfaces/projectsInterfaces";

defineProps({
  renderFor: {
    type: String
  },
  countItemsForRender: {
    type: Number,
    required: true
  }
})

const projectsArr = ref([] as Array<IProjectObject>)

onMounted(async () => {
  await EX_$Projects?.getProjects()
  projectsArr.value = EX_$Projects.projectsArr
})
</script>

<style lang="scss" scoped>
@use './styles/projects-list';
</style>
