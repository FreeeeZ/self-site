import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/pages/home/index.vue';
import Projects from '@/pages/projects/index.vue';
import Experience from '@/pages/experience/index.vue';
import NotFound from '@/pages/not-found/index.vue';

const baseUrl = process.env.NODE_ENV === 'development' ? '/' : '/self-site/';

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
  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth',
    };
  },
  history: createWebHistory(baseUrl),
  routes,
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link',
});

export default router;
