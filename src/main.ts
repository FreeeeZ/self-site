import 'normalize.css'
import { createApp } from 'vue'
import VueSmoothScroll from 'vue3-smooth-scroll'

import App from '@/App.vue'
import router from "@/router";

createApp(App).use(router).use(VueSmoothScroll, {
  duration: 800,
  offset: -80,
  updateHistory: false
}).mount('#app')
