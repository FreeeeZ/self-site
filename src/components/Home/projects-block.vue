<template>
  <div class="projects-block">
    <div class="container">
      <h2 class="projects-block__title">Projects</h2>
      <div class="projects-block__list">
        <div class="projects-block__list-item" v-for="(project, index) in type === 'home-page' ? EX_$Projects.projectsArr.slice(0, 2) : EX_$Projects.projectsArr" :key="index">
          <div class="list-item__info">

            <h2 class="list-item__info-title">
              <a rel="noopener noreferrer nofollow"
                 :href="project.html_url"
                 target="_blank"
              >
                {{project.name}}
              </a>
            </h2>
            <div class="list-item__info-tags" v-if="project.tags ? Object.keys(project.tags).length : ''">
              <div class="list-item__info-tags-item" v-for="(tag, index) in Object.keys(project.tags)" :key="index">
                {{tag}}
              </div>
            </div>
            <p class="list-item__info-description" v-if="project.description">
              {{project.description}}
            </p>
          </div>
        </div>
      </div>
      <div class="projects-block__bottom" v-if="props.type === 'home-page'">
        <router-link to="/projects" class="button button-primary">
          SEE ALL PROJECTS
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import EX_$Projects from '@/typescript/projects'

const props = defineProps({
  type: { type: String, required: true }
})

onMounted(() => {
  EX_$Projects.getProjects()
})
</script>

<style lang="scss" scoped>
@use './styles/projects-block.scss';
</style>
