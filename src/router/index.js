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

// 创建 Vue Router 实例
const router = createRouter({
    // 使用 HTML5 History 模式
    history: createWebHistory(),
    // 路由配置数组
    routes,
    // 控制路由切换时页面的滚动行为
    scrollBehavior(to, from, savedPosition) {
        // 如果有保存的滚动位置（如浏览器前进/后退），则返回该位置
        if (savedPosition) {
            return savedPosition
        }

        // 查找页面上的 .top-nav 元素
        const navElement = document.querySelector('.top-nav');
        if (navElement) {
            // 获取导航栏距离页面顶部的距离
            const navTop = navElement.offsetTop;

            // 滚动到导航栏位置，让导航栏显示在页面顶部
            return {
                top: navTop,
                behavior: 'smooth'
            }
        }

        // 如果找不到导航栏，默认滚动到页面顶部
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