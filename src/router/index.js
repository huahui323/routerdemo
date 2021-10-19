//
import { createRouter, createWebHistory } from 'vue-router'
/*
import Home from './../components/Home.vue'
import About from './../components/About.vue'
import NotFound from '../components/404.vue'
import News from '../components/News.vue'*/
import AboutYou from '../components/AboutYou.vue'
import AboutMe from '../components/AboutMe.vue'
import Event from '../components/Event.vue'
const Home = () => import('./../components/Home.vue')
const About = () => import('./../components/About.vue')
const News = () => import('./../components/News.vue')
const NotFound = () => import('../components/404.vue')
//2.
const routers = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    {
        path: '/about',
        component: About,
        children: [
            {
                path: 'aboutyou',//嵌套路由不使用斜杠/
                component: AboutYou
            },
            {
                path: 'aboutme',
                component: AboutMe
            }
        ]
    },
    { path: '/news/:nid', component: News },/*动态路由，必须是不变部分+动态部分*/
    { path: '/:catchAll(.*)', component: NotFound },
    {  path: '/event', component: Event}
]
//3.创建路由对象
const router = createRouter({
    history: createWebHistory(),
    routes: routers//键值名字一样，使用简写
});
//4.导出以便vue中使用
export default router;
