import Vue from 'vue'
import VueRouter from 'vue-router'
import ErrorPage from '../views/404'
import DigitalScreen from "../views/DigitalScreen";
import Home from "../views/Home";
import PowerPred from "@/views/PowerPred";
import PersonalPage from "@/views/PersonalPage";
import DataProcess from "@/views/DataProcess";
import NewWindFarm from "@/views/NewWindFarm";
import FarmCreate from "@/views/FarmCreate";
import Pred from "@/views/Pred";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Doob || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Doob || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/personal',
        name: 'PersonalPage',
        component: PersonalPage,
        meta: {
            title: 'Doob || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/pred',
        name: 'Pred',
        component: Pred,
        meta: {
            title: '功率预测',
        },
        children: [{
            path: ':id(\\d+)',
            component: PowerPred,
            meta: {
                title: '功率预测',
            }
        },
            {
                path: 'new',
                component: NewWindFarm,
                meta: {
                    title: '创建风电场',
                }
            },{
                path: '/',
                component: FarmCreate,
                meta: {
                    title: '创建风电场',
                }
            }]
    },
    {
        path: '/digitalScreen',
        name: 'DigitalScreen',
        component: DigitalScreen,
        meta: {
            title: 'Button || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/error',
        name: 'Error',
        component: ErrorPage,
        meta: {
            title: '404 || Doob Business and Consulting Bootstrap5 Template',
        },
    },
    {
        path: '/dataProcess',
        name: 'DataProcess',
        component: DataProcess,
        meta: {
            title: '数据处理',
        },
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
    window.scrollTo(0, 0)
});

export default router
