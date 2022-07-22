<template>
  <div class="projects-block">
    <div class="container">
      <h2 class="projects-block__title">Projects</h2>
      <div class="projects-block__list">
        <div class="projects-block__list-item" v-for="(project, index) in type === 'home-page' ? projectsList.slice(0, 2) : projectsList" :key="index">
<!--          <picture class="list-item__picture">-->
<!--            <source type="image/webp" :srcset="project.image">-->
<!--            <img :src="project.image" alt="Main photo">-->
<!--          </picture>-->
          <div class="list-item__info">

            <h2 class="list-item__info-title">
              <a rel="noopener noreferrer nofollow"
                 :href="project.html_url"
                 target="_blank"
              >
                {{project.name}}
              </a>
            </h2>
            <div class="list-item__info-tags">
              <div class="list-item__info-tags-item" v-for="(tag, index) in Object.keys(project.tags)" :key="index">
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
import { onMounted, reactive } from "vue";
import axios from "axios";

const props = defineProps({
  type: { type: String, required: true }
})

let projectsList = reactive([])

const getProjects = async () => {
  await axios.get('https://api.github.com/users/FreeeeZ/repos')
    .then(function (response) {
      for (let i = 0; i < response.data.length; i++) {
        projectsList.push(response.data[i])

        axios.get(`https://api.github.com/repos/FreeeeZ/${response.data[i].name}/languages`)
          .then(function (response) {
            projectsList[i].tags = response.data
          })
          .catch(function (error) {
            console.log(error);
          })
      }
    })
    .catch(function (error) {
      console.log(error);
    })
};

onMounted(() => {
  getProjects()
})
</script>

<style lang="scss" scoped>
  @use './styles/projects-block.scss';
</style>