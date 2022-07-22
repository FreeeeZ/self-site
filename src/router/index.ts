import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home/index.vue';
import Projects from '@/views/Projects/index.vue';
import Experience from '@/views/Experience/index.vue';
import NotFound from '@/views/NotFound/index.vue';

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
  {
    path: '/experience',
    name: 'Experience',
    component: Experience,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link',
});

export default router;