import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/home/index.vue';
import Projects from '@/views/projects/index.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;