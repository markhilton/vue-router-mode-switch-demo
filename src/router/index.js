/* eslint-disable no-unused-vars */
import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import(/* webpackChunkName: "about" */ "../views/Dashboard.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = () => {
  console.log("INITIALIZE ROUTER");

  const instance = new VueRouter({
    mode: store.state.status ? "hash" : "history",
    routes,
  });

  instance.beforeEach((to, from, next) => {
    console.log("router.beforeEach " + new Date());
    next();
  });

  const path = window.location.pathname + window.location.search;

  console.log("CLEAR PATH ROUTER:", path);

  history.pushState(null, null, path);

  return instance;
};

export default router;
