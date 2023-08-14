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
import Management from "@/views/Management";
import Technical from "@/views/Technical";
import WeatherPred from "@/views/WeatherPred";
import WeatherSingle from "@/views/WeatherSingle";
import FeedBack from "@/views/FeedBack";
import Detail from "@/views/Detail";
import DetailSingle from "@/views/DetailSingle";
// import Technical from "@/views/Technical";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: '主页',
        },
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            title: '主页',
        },
    },
    {
        path: '/personal',
        name: 'PersonalPage',
        component: PersonalPage,
        meta: {
            title: '个人主页',
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
            },
            {
                path: 'management',
                component: Management,
                meta: {
                    title: '风场管理',
                }
            }]
    },
    {
        path: '/digitalScreen',
        name: 'DigitalScreen',
        component: DigitalScreen,
        meta: {
            title: '数字化大屏',
        },
    },
    {
        path: '/error',
        name: 'Error',
        component: ErrorPage,
        meta: {
            title: '404',
        },
    },
    {
        path: '/feedback',
        name: 'FeedBack',
        component: FeedBack,
        meta: {
            title: '异常反馈',
        },
    },
    {
        path: '/dataProcess',
        name: 'DataProcess',
        component: DataProcess,
        meta: {
            title: '数据处理',
        },
        children: [{
            path: ':id(\\d+)',
            component: DataProcess,
            meta: {
                title: '数据处理',
            }
        }]
    },
    {
        path: '/technical',
        name: 'Technical',
        component: Technical,
        meta: {
            title: '技术要点介绍',
        }
    },
    {
        path: '/weatherPred',
        name: 'WeatherPred',
        component: WeatherPred,
        meta: {
            title: '气象监控',
        },
        children: [{
            path: ':id(\\d+)',
            component: WeatherSingle,
            meta: {
                title: '气象监控',
            }
        }]
    },
    {
        path: '/detail',
        name: 'Detail',
        component: Detail,
        meta: {
            title: '风场详情',
        },
        children: [{
            path: ':id(\\d+)',
            component: DetailSingle,
            meta: {
                title: '风场详情',
            }
        }]
    },
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
