import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("@/views/HomePage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
