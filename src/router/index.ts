import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue"; // Assure-toi du chemin correct

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/articles",
    name: "articles",
    component: () => import("../views/Articles.vue"), // Chargement dynamique
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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Utilise l'historique HTML5
  routes,
});

export default router;
