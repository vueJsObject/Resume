<template>
    <nav class="top-nav wow" :class="{ 'nav-shadow': isScrolled }">
        <div class="container">
            <div class="navbar navbar-expand-lg navbar-light">
                <button class="navbar-toggler" type="button" @click="toggleNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" :class="{ show: !isCollapsed }">
                    <ul class="navbar-nav">
                        <li class="nav-item" v-for="item in navItems" :key="item.id">
                            <router-link :to="{ name: item.id }" class="nav-link" @click="handleNavClick"
                                :class="{ active: isActive(item.id) }">
                                {{ item.content }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

/**
 * 控制导航菜单是否折叠
 * @type {import('vue').Ref<boolean>}
 */
const isCollapsed = ref(true)

/**
 * 控制是否显示导航栏阴影
 * @type {import('vue').Ref<boolean>}
 */
const isScrolled = ref(false)

/**
 * 保存每个页面的滚动位置
 * @type {import('vue').Ref<Object>}
 */
const savedScrollPositions = ref({})

/**
 * 判断当前路由是否激活
 */
const isActive = (routeName) => {
    return route.name === routeName
}

/**
 * 切换导航菜单的展开/收起状态
 */
const toggleNav = () => {
    isCollapsed.value = !isCollapsed.value
}

/**
 * 保存当前页面的滚动位置
 */
const saveCurrentScrollPosition = () => {
    const mainContentElement = document.querySelector('.main-content')
    if (mainContentElement) {
        const currentRoute = route.name
        savedScrollPositions.value[currentRoute] = mainContentElement.scrollTop
        console.log('保存页面滚动位置:', currentRoute, '位置:', mainContentElement.scrollTop)
    }
}

/**
 * 恢复页面的滚动位置
 */
const restoreScrollPosition = () => {
    const mainContentElement = document.querySelector('.main-content')
    if (mainContentElement) {
        const currentRoute = route.name
        const savedPosition = savedScrollPositions.value[currentRoute] || 0

        console.log('恢复页面滚动位置:', currentRoute, '位置:', savedPosition)

        if (savedPosition > 0) {
            mainContentElement.scrollTo({
                top: savedPosition,
                behavior: 'smooth'
            })
        }
    }
}

/**
 * 处理导航点击事件
 */
const handleNavClick = () => {
    console.log('=== 导航点击调试信息 ===')

    // 保存当前页面的滚动位置
    saveCurrentScrollPosition()

    // 关闭导航菜单
    isCollapsed.value = true

    // 延迟执行，确保路由切换完成后再获取位置
    setTimeout(() => {
        // 获取导航栏元素
        const navElement = document.querySelector('.top-nav')
        const mainContentElement = document.querySelector('.main-content')

        if (navElement && mainContentElement) {
            const navTop = navElement.offsetTop
            const navHeight = navElement.offsetHeight
            const mainContentTop = mainContentElement.offsetTop
            const navRect = navElement.getBoundingClientRect()
            const mainContentRect = mainContentElement.getBoundingClientRect()
            const windowScrollY = window.scrollY

            console.log('导航栏 offsetTop:', navTop)
            console.log('导航栏高度:', navHeight)
            console.log('主内容区域 offsetTop:', mainContentTop)
            console.log('导航栏 getBoundingClientRect().top:', navRect.top)
            console.log('当前页面滚动位置 window.scrollY:', windowScrollY)
            console.log('导航栏距离页面顶部的实际距离:', navTop + windowScrollY)
            console.log('导航栏距离视口顶部的距离:', navRect.top)

            console.log('主内容区域 getBoundingClientRect().top:', mainContentRect.top)
            console.log('主内容区域距离页面顶部的实际距离:', mainContentTop + windowScrollY)
            console.log('主内容区域距离视口顶部的距离:', mainContentRect.top)
            console.log('主内容区域滚动位置:', mainContentElement.scrollTop)

            // 计算正确的滚动目标位置
            // 我们需要滚动到主内容区域的顶部，让它在导航栏下方显示
            let scrollTarget = mainContentTop - navHeight

            console.log('计算出的滚动目标位置:', scrollTarget)
            console.log('这样主内容区域会显示在导航栏下方，距离视口顶部:', navHeight, 'px')

            // 滚动到目标位置
            window.scrollTo({
                top: scrollTarget,
                behavior: 'smooth'
            })
        }

        // 延迟恢复新页面的滚动位置
        setTimeout(() => {
            restoreScrollPosition()
        }, 200)
    }, 100)
}

/**
 * 关闭导航菜单并滚动到页面顶部
 */
const closeNav = () => {
    isCollapsed.value = true
    const navElement = document.querySelector('.top-nav')
    if (navElement) {
        const navTop = navElement.offsetTop
        window.scrollTo({
            top: navTop,
            behavior: 'smooth'
        })
    }
}

/**
 * 监听滚动事件，决定是否显示导航栏阴影
 */
const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
}

/**
 * 导航菜单配置项
 * @type {import('vue').Ref<Array<{
 *   id: string,      // 路由名称
 *   content: string  // 显示文本
 * }>>}
 */
const navItems = ref([
    {
        id: "work",
        content: "个人经历"
    },
    {
        id: "skillCores",
        content: "核心技能"
    },
    {
        id: "skillOthers",
        content: "其它技能"
    },
    {
        id: "projects",
        content: "部分作品"
    },
    {
        id: "evaluation",
        content: "自我评价"
    },
])

// 组件挂载时添加滚动监听
onMounted(() => {
    window.addEventListener('scroll', handleScroll)

    // 页面加载时恢复滚动位置
    setTimeout(() => {
        restoreScrollPosition()
    }, 100)
})

// 组件卸载时移除滚动监听
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.top-nav {
    background: #fff;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    transition: all 0.3s ease;
}

.nav-shadow {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.navbar {
    padding: 0;
}

.navbar-nav {
    margin: 0 auto;
    display: flex;
    gap: 2rem;
}

.nav-link {
    color: #333;
    text-decoration: none;
    font-weight: 500;
    padding: 10px 20px;
    position: relative;
    transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
    color: #007bff;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 2px;
    background: #007bff;
    transition: all 0.2s ease;
}

.nav-link.active::after {
    width: 30px;
}

.nav-link:hover::after {
    width: 20px;
    opacity: 0.5;
}

.navbar-toggler {
    border: none;
    padding: 0.5rem;
}

@media (max-width: 768px) {
    .navbar-nav {
        text-align: center;
    }

    .nav-link {
        padding: 15px;
    }

    .nav-link.active::after {
        width: 40px;
    }
}
</style>