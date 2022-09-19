<template>
  <div class="main-footer__navigation">
    <nav>
      <ul>
        <li v-for="(item, index) in formattedRouter" :key="index" :tabindex="0">
          <router-link :to="item.path">
            {{item.name}}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();
const formattedRouter = router.options.routes.filter(route => route.name !== 'NotFound' && route.name !== 'PathForNotFound');
</script>

<style lang="scss" scoped>
@use './styles/navigation.scss';
</style>
