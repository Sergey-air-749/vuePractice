import { createRouter, createWebHistory } from "vue-router";

import Home from './components/home.vue'
import Profile from "./components/profile.vue";
import viewimg from "./components/viewimg.vue";
import NotFound from "./components/NotFound.vue"

const routes  = [
    {
        path: '/',
        name: "home",
        component: Home
    },
    {
        path: '/img/:userId/:id',
        name: "img",
        component: viewimg
    },
    {
        path: '/profile/:id',
        name: "profile",
        component: Profile
    },
    {
        path: "/:pathMatch(.*)*",
        name: NotFound,
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes 
})

export default router