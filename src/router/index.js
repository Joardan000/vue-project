import {createRouter, createWebHistory} from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import BlankLayout from '../layouts/BlankLayout.vue'
import Home from '../pages/Home.vue'
import AboutMember from '../pages/AboutMember.vue'

const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: '',
                name: 'Home',
                component: Home
            }
        ]
    },
    {
        path: '/member',
        component: BlankLayout,
        children: [
            {
                path: ':id',
                name: 'AboutMember',
                component: AboutMember,
                props: true
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router