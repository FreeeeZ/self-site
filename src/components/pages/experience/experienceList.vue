<template>
  <div class="experience-list">
    <div class="container">
      <div class="experience-list__items">
        <div
          v-for="(company, index) in experienceArray"
          :key="index"
          class="experience-list__items-point"
        >
          <div class="list-item__info">
            <p class="list-item__info-years">
              {{company?.yearInterval}}
            </p>
            <p class="list-item__info-name">
              {{company?.name}}
            </p>
            <p class="list-item__info-position">
              {{company?.position}}
            </p>
            <p class="list-item__info-description" v-html="company?.description" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useExperienceList from "@/components/pages/experience/useExperienceList";

const { experienceArray } = useExperienceList();
</script>

<style lang="scss" scoped>
@use 'styles/experience-list';
</style>
