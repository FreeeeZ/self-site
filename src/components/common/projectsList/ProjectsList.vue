<template>
  <div class="projects-list">
    <div class="container">
      <h2 class="projects-list__title">Projects</h2>
      <div v-if="projectsArr?.length">
        <div class="projects-list__items">
          <div
            v-for="(project, projectIdx) in countItemsForRender
              ? projectsArr?.slice(0, countItemsForRender)
              : projectsArr"
            :key="projectIdx"
            class="projects-list__items-point"
          >
            <div class="list-item__info">
              <div class="list-item__info-title">
                <h2>
                  <a rel="noopener noreferrer nofollow" :href="project?.html_url" target="_blank">
                    {{ project?.name }}
                  </a>
                </h2>
              </div>
              <div v-if="project?.homepage" class="list-item__info-demo-link">
                <p>Demo link:</p>
                <a rel="noopener noreferrer nofollow" :href="project?.homepage" target="_blank">
                  {{ project?.homepage }}
                </a>
              </div>
              <div v-if="project?.tags" class="list-item__info-tags">
                <div
                  v-for="(tag, tagIdx) in project?.tags"
                  :key="tagIdx"
                  class="list-item__info-tags-item"
                >
                  {{ tag }}
                </div>
              </div>
              <div v-if="project?.description" class="list-item__info-description">
                <p>
                  {{ project?.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-if="renderFor === 'home-page'" class="projects-list__bottom">
          <RouterLink to="/projects" class="button button-primary button-uppercase">
            See all projects
          </RouterLink>
        </div>
      </div>
      <AppButton v-else button-type="primary-with-icon" disabled>
        <LoadingIcon color="#000000" />
        Processing...
      </AppButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useProjectsList from '@/components/common/projectsList/useProjectsList';

import LoadingIcon from '@/components/icons/LoadingIcon.vue';
import AppButton from '@/components/ui/buttons/AppButton.vue';

defineProps({
  renderFor: {
    type: String,
  },
  countItemsForRender: {
    type: Number,
    required: true,
  },
});

const { projectsArr } = useProjectsList();
</script>

<style lang="scss" scoped>
@use './styles/projects-list';
</style>
