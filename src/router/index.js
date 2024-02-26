import { createRouter, createWebHistory } from "vue-router";
import { authStore } from '@/store';
// import axios from '@/axios';
const routes = [ 

    {
        path: "/",
        name: "login",
        component: () => import("@/views/auth/login.vue"),
        
        meta: {
            requiresAuth: true,
            layout: 'front-layout'
        },
    },

    {
        path: "/about",
        name: "about",
        component: () => import("@/views/front/about.vue"),
        
        meta: {
            requiresAuth: true,
            layout: 'front-layout'
        },
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/admin/dashboard.vue"),
        
        meta: {
            requiresAuth: true,
            layout: 'admin-layout'
        },
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from, next) => {

    const store = authStore();
    if (to.meta.requiresAuth && !store.getAuthentication) {
        next()
        useToast().error('Veuillez vous connecter pour continuer')
    }else if(to.meta.requiresAuth && store.getAuthentication){
        next()
    }
    else{
        next()
    }
});

export default router;