import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../layout/MainLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      component: MainLayout,
      children: [{ path: '', name: 'Homepage', component: () => import('../pages/HomePage.vue') }],
    },
    {
      path: '/watches',
      component: MainLayout,
      children: [{ path: '/watches', name: 'WatchesPage', component: () => import('../pages/WatchesPage.vue') }],
    },
    {
      path: '/jewelry',
      component: MainLayout,
      children: [{ path: '/jewelry', name: 'JewelryPage', component: () => import('../pages/JewelryPage.vue') }],
    },
    {
      path: '/accessories',
      component: MainLayout,
      children: [{ path: '/accessories', name: 'AccessoriesPage', component: () => import('../pages/AccessoriesPage.vue') }],
    },

    { path: '/:catchAll(.*)*', name: '404', component: () => import('../pages/404.vue') },
  ],
});
export default router;
