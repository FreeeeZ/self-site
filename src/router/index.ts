import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home/index.vue';
import Projects from '@/views/Projects/index.vue';
import Experience from '@/views/Experience/index.vue';
import NotFound from '@/views/NotFound/index.vue';

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
