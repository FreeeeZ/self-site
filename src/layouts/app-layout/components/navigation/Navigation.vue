<template>
  <div class="app-layout__navigation" :class="`app-layout__navigation_${navigationType}`">
    <nav>
      <ul>
        <li v-for="(routeItem, index) in formattedRouter" :key="index" :tabindex="0">
          <RouterLink :to="routeItem.path">
            {{ routeItem.name }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

defineProps({
  navigationType: {
    type: String,
    required: true,
  },
});

const router = useRouter();
const formattedRouter = router.options.routes.filter(
  (route) => route.name !== 'NotFound' && route.name !== 'PathForNotFound'
);
</script>

<style lang="scss" scoped>
@use './styles/navigation';
</style>
