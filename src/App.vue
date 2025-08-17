<template>
    <div class="app-container">
        <Banner />
        <TopNav />
        <main class="main-content">
            <router-view v-slot="{ Component }">
                <component :is="Component" class="page" />
            </router-view>
        </main>
        <Footer />
    </div>
</template>

<script setup>
import Banner from './components/Banner.vue'
import TopNav from './components/TopNav.vue'
import Footer from './components/Footer.vue'
</script>

<style>
.app-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.main-content {
    flex: 1;
    /* margin-bottom: 60px; */
    position: relative;
    z-index: 1;
    /* padding-top: 20px; */
    background: #fff;
}

/* 页面切换动画 */
.page {
    padding-top: 10px;
    animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

/* 确保页面滚动平滑 */
html {
    scroll-behavior: smooth;
}

/* 移除 body 的默认边距 */
body {
    margin: 0;
    padding: 0;
}
</style>