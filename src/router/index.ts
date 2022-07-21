import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home/index.vue';
import Projects from '@/views/Projects/index.vue';
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
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior () {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth'
    });
  }
});

export default router;