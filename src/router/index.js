import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ComponentsView from '../views/ComponentsView.vue';
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import NoSidebarLayout from "@/layouts/NoSidebarLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: NoSidebarLayout,
      children: [
        {path: '', name: 'Home', component: HomeView},
        // { path: '*', component: NotFound }
      ]
    },
    {
      path: '/components',
      component: DefaultLayout,
      children: [
        {path: '', name: 'Components', component: ComponentsView},
        {path: 'inputs', name: 'Inputs', component: () => import('../views/InputsView.vue')},
        {path: 'accordions', name: 'Accordions', component: () => import('../views/AccordionsView.vue')},
        {path: 'color-palette', name: 'ColorPalette', component: () => import('../views/ColorPaletteView.vue')},
      ]
    },
  ]
});

export default router;
