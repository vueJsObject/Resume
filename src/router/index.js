import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 路由懒加载
const Projects = () => import(/* webpackChunkName: "projects" */ '../views/Projects.vue')
const Work = () => import(/* webpackChunkName: "work" */ '../views/Work.vue')
const SkillCores = () => import(/* webpackChunkName: "skill-cores" */ '../views/SkillCores.vue')
const SkillOthers = () => import(/* webpackChunkName: "skill-others" */ '../views/SkillOthers.vue')
const Evaluation = () => import(/* webpackChunkName: "evaluation" */ '../views/Evaluation.vue')

const routes = [
    {
        path: '/',
        redirect: '/work'
    },
    {
        path: '/work',
        name: 'work',
        component: Work,
        meta: {
            title: '个人经历',
            transition: 'fade'
        }
    },
    {
        path: '/skillCores',
        name: 'skillCores',
        component: SkillCores,
        meta: {
            title: '核心专能',
            transition: 'fade'
        }
    },
    {
        path: '/skillOthers',
        name: 'skillOthers',
        component: SkillOthers,
        meta: {
            title: '其它技能',
            transition: 'fade'
        }
    },
    {
        path: '/projects',
        name: 'projects',
        component: Projects,
        meta: {
            title: '部分作品',
            transition: 'fade'
        }
    },
    {
        path: '/evaluation',
        name: 'evaluation',
        component: Evaluation,
        meta: {
            title: '自我评价',
            transition: 'fade'
        }
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/work'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        const navElement = document.querySelector('.top-nav')
        if (navElement) {
            const navTop = navElement.offsetTop
            return {
                top: navTop,
                behavior: 'smooth'
            }
        }
        return {
            top: 0,
            behavior: 'smooth'
        }
    }
})

// 配置 NProgress
NProgress.configure({
    showSpinner: false,
    trickleSpeed: 200
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
    // 开始进度条
    NProgress.start()
    // 设置页面标题
    document.title = `${to.meta.title} - 我的简历`
    next()
})

router.afterEach(() => {
    // 结束进度条
    NProgress.done()
})

export default router