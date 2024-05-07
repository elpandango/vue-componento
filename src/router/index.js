import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ComponentsView from '../views/ComponentsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ComponentsView
    },
    {
      path: '/components',
      name: 'Components',
      component: () => import(/* webpackChunkName: "about" */ '../views/ComponentsView.vue')
    },
  ]
});

export default router;
