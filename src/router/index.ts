import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue"; 

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/articles",
    name: "articles",
    component: () => import("../views/Articles.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/ProfileView.vue"),
  },
  {
    path: "/Login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/Register",
    name: "register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/Article",
    name: "article",
    component: () => import("../views/Article.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes,
});

export default router;
