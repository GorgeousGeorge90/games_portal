import { createRouter, createWebHistory } from 'vue-router'
import GamesPage from '@/pages/GamesPage';
import NewsPage from '@/pages/NewsPage';
import ContactsPage from "@/pages/ContactsPage";



export const routes = [
    {
        path:'/',
        component:GamesPage,
    },
    {
        path:'/news',
        component:NewsPage,
    },
    {
        path: '/contacts',
        component: ContactsPage,
    }

]

export const router = createRouter({
    routes,
    history:createWebHistory(),
})