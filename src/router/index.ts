import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('/@/views/Home.vue'),
    },
    {
        path: '/:path(.*)*',
        name: 'NotFound',
        component: () => import('/@/views/NotFound.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export { router }