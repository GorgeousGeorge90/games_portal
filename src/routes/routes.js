import { createRouter, createWebHistory } from 'vue-router'
import GamesPage from '@/pages/GamesPage';
import NewsPage from '@/pages/NewsPage';
import ContactsPage from "@/pages/ContactsPage";
import GiveawaysPage from "@/pages/GiveawaysPage";
import CurrentGamePage from "@/pages/CurrentGamePage";




export const routes = [
    {
        path:'/',
        component:GamesPage,
    },
    {
        path:'/:id',
        component: CurrentGamePage,
    },
    {
        path:'/news',
        component:NewsPage,
    },
    {
        path:'/giveaways',
        component:GiveawaysPage,
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