import { createApp } from 'vue';
import { createPinia } from 'pinia';
import clickOutside from 'click-outside-vue3';
import VueSmoothScroll from 'vue3-smooth-scroll';

import App from '@/App.vue';
import router from '@/router';

import 'normalize.css';
import '@/assets/scss/_ui/index.scss';
import '@/assets/scss/_global/index.scss';

const pinia = createPinia();
export const app = createApp(App);

app
  .use(router)
  .use(clickOutside)
  .use(pinia)
  .use(VueSmoothScroll, {
    duration: 800,
    offset: -80,
    updateHistory: false,
  })
  .mount('#app');
