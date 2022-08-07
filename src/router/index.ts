import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/home/index.vue';
import Projects from '@/views/projects/index.vue';
import Experience from '@/views/experience/index.vue';
import NotFound from '@/views/not-found/index.vue';

const baseUrl = process.env.NODE_ENV === 'development' ? '/' : '/self-site/'

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
    path: '/404',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PathForNotFound',
    redirect: '/404'
  },
];

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
      behavior: 'smooth',
    }
  },
  history: createWebHistory(baseUrl),
  routes,
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link',
});

export default router;
