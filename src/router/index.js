import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '../layouts/MainLayout.vue'
import BlankLayout from '../layouts/BlankLayout.vue'
import Home from '../pages/Home.vue'
import AboutMember from '../pages/AboutMember.vue'
import Login from '../pages/Login.vue'
import SecondPage from "../pages/SecondPage.vue";

import { auth } from '../stores/auth.js'

const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: '',
                name: 'Home',
                component: Home,
                meta: { requiresAuth: true }
            }
        ]
    },
    {
        path: '/member',
        component: BlankLayout,
        meta: { requiresAuth: true },
        children: [
            {
                path: ':id',
                name: 'AboutMember',
                component: AboutMember,
                props: true
            }
        ]
    },
    {
        path: '/login',
        component: BlankLayout,
        children: [
            {
                path: '',
                name: 'Login',
                component: Login,
                meta: { requiresGuest: true }
            }
        ]
    },
    {
        path: '/second-page',
        component: BlankLayout,
        children: [
            {
                path: '',
                name: 'SecondPage',
                component: SecondPage,
                meta: { requiresAuth: true }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0, behavior: 'smooth' }
        }
    }
})

// Auth Guard
router.beforeEach((to, from, next) => {
    const authIs = auth()
    if (!authIs.isAuthenticated && to.meta.requiresAuth) {
        next({ name: 'Login' })
    } else if (authIs.isAuthenticated && to.path === '/login') {
        next({ name: 'Home' })
    } else {
        next()
    }
})

export default router