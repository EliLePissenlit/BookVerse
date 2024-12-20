import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Login from '../views/Login.vue';
import Article from '../views/Article.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'), 
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/article/:id', // Route dynamique avec un paramètre d'URL
      name: 'article',
      component: Article,
      props: true, // Permet de passer automatiquement `id` en tant que prop
    },
  ],
});

export default router;
