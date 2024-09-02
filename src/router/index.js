import { createRouter, createWebHistory } from 'vue-router';

// Importação dos componentes com Lazy Loading
const HelloWorld = () => import('@/components/HelloWorld.vue');

const routes = [
  { path: '/', component: HelloWorld },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;