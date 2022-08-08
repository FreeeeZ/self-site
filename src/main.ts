import { createApp } from 'vue'
// @ts-ignore
import clickOutside from 'click-outside-vue3'
import VueSmoothScroll from 'vue3-smooth-scroll'

import App from '@/App.vue'
import router from "@/router";

import 'normalize.css'
import 'aos/dist/aos.css'

createApp(App).use(router).use(clickOutside).use(VueSmoothScroll, {
  duration: 800,
  offset: -80,
  updateHistory: false
}).mount('#app')
