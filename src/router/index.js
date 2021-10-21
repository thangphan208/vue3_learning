import {createRouter, createWebHistory} from 'vue-router'

import About from "../view/About";
import Home from "../view/Home";
import Detail from "../view/Detail";

const routes = [
    {
        path:'/about',
        component : About,
        name : 'About'
    },
    {
        path:'/home',
        component : Home,
        name : 'Home'
    },
    {
        path:'/detail',
        component : Detail,
        name : 'Detail'
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router