import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    /*{
        path: '/',
        name: 'Home',
        component: Home
    },*/
    {
        path: '/about',
        name: 'About',
        component: () => import( '../views/About.vue')
    },
    {
        path: '/detail',
        name: 'Detail',
        component: () => import( '../views/Detail.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
