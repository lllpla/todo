import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Now.vue")
  },
  {
    path: "/now",
    name: "now",
    component: () => import("../views/Now.vue")
  },
  {
    path: "/finish",
    name: "finish",
    component: () => import("../views/Finish.vue")
  },
  {
    path: "/setting",
    name: "setting",
    component: () => import("../views/Setting.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
