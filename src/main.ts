import { createApp } from 'vue'
import 'normalize.css'
import App from '@/app.vue'
import router from "@/router";
import VueSmoothScroll from 'vue3-smooth-scroll'

createApp(App).use(router).use(VueSmoothScroll, {
  duration: 800,
  offset: -80,
  updateHistory: false
}).mount('#app')
