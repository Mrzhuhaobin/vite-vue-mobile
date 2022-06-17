import { createRouter, createWebHistory } from 'vue-router';
import home from '@/pages/home.vue';


const routes = [
    {
        path: '/', redirect: '/home'
    },
    {
        path: '/home', component: home, meta: { title: '首页' }
    },
    {
        path: '/about', component: () => import('@/pages/about.vue'), meta: { title: '关于' }
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
