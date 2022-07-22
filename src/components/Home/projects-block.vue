<template>
  <div class="projects-block">
    <div class="container">
      <h2 class="projects-block__title">Projects</h2>
      <div class="projects-block__list">
        <div class="projects-block__list-item" v-for="(project, index) in projectsList" :key="index">
          <picture class="list-item__picture">
            <source type="image/webp" :srcset="project.image">
            <img :src="project.image" alt="Main photo">
          </picture>
          <div class="list-item__info">
            <h2 class="list-item__info-title">
              {{project.title}}
            </h2>
            <div class="list-item__info-tags">
              <div class="list-item__info-tags-item" v-for="(tag, index) in project.tags" :key="index">
                {{tag}}
              </div>
            </div>
            <p class="list-item__info-description">
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
const props = defineProps({
  type: { type: String, required: true }
})

const projectsList = [
  {
    title: 'TITLE PROJECT',
    image: '',
    tags: [
      'JavaScript',
      'TypeScript',
      'Vue'
    ],
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  },
  {
    title: 'I N S I G H T G R A M',
    image: '',
    tags: [
      'TypeScript',
      'Vue'
    ],
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  }
]
</script>

<style lang="scss" scoped>
  @use './styles/projects-block.scss';
</style>