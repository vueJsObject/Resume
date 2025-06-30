<template>
    <header class="banner" :class="{ 'banner-animate': isVisible }">
        <div class="banner-info">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 header-left">
                        <div class="image-container">
                            <img :src="homeConfig.img" :alt="homeConfig.infoContentHeader[1]" class="profile-img"
                                @click="handleImageClick">
                        </div>
                    </div>
                    <div class="col-md-9 header-right">
                        <div class="header-content">
                            <h1 v-for="(header, index) in homeConfig.infoContentHeader" :key="index"
                                :style="{ animationDelay: `${index * 0.2}s` }" class="animate-text">
                                {{ header }}
                            </h1>
                            <ul class="info-list">
                                <li v-for="(info, index) in homeConfig.infoConfig" :key="index"
                                    :style="{ animationDelay: `${(index + 3) * 0.2}s` }" class="animate-item">
                                    <div class="info-item">
                                        <span class="info-label" v-if="info.name">{{ info.name }}</span>
                                        <span class="info-content">
                                            <a v-if="info.content[0].url" v-for="(item, index) in info.content"
                                                :key="index" :href="item.url" target="_blank" class="info-link">
                                                {{ item.text }}
                                            </a>
                                            <span v-else>{{ info.content[0].text }}</span>
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
    setTimeout(() => {
        isVisible.value = true
    }, 100)
})

const handleImageClick = () => {
    // 可以添加图片点击效果，比如放大查看
    console.log('Image clicked')
}

const homeConfig = ref({
    img: '/images/your_ico.ico',
    infoContentHeader: ["涎涎", "全栈工程师"],
    infoConfig: [
        {
            name: "民族/性别",
            content: [{
                text: "汉/男"
            }]
        },
        {
            name: "学历/专业",
            content: [{
                text: "本科/计算机信息管理"
            }]
        },
        {
            name: "电话/邮箱",
            content: [{
                text: "152********/511948469@qq.com"
            }]
        },
        {
            name: "博客地址",
            content: [
                {
                    text: "简书 2016年至2020年",
                    url: "https://www.jianshu.com/u/6aee7ae0e23a"
                },
                {
                    text: "OSCHINA 2021至今",
                    url: "https://my.oschina.net/u/3222198"
                },
                {
                    text: "自建博客(基于GITHUB)",
                    url: "https://yanbo0039.github.io/blog/zh/"
                }
            ]
        },

        {
            name: "远程仓库",
            content: [
                {
                    text: "国际版(非大陆地区)Github",
                    url: "https://github.com/yanbo0039"
                },
                {
                    text: "国内版(大陆地区)Gitee",
                    url: "https://gitee.com/yanbo0039"
                }
            ]
        }
    ]
})
</script>

<style scoped>
.banner {
    opacity: 0;
    transform: translateY(-20px);
    transition: all 0.5s ease;
    position: relative;
    z-index: 1;
    background: url('/images/a.jpg') no-repeat center 0px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    min-height: 600px;
}

.banner-animate {
    opacity: 1;
    transform: translateY(0);
}

.banner-info {
    position: relative;
    z-index: 2;
    background: none;
}

.image-container {
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.profile-img {
    width: 100%;
    transition: transform 0.3s ease;
    cursor: pointer;
}

.profile-img:hover {
    transform: scale(1.05);
}

.header-content {
    padding: 20px 0;
}

.animate-text {
    opacity: 0;
    transform: translateY(20px);
    animation: slideUp 0.5s ease forwards;
    margin-bottom: 15px;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    font-size: 2.5em;
}

.info-list {
    list-style: none;
    padding: 0;
    margin-top: 30px;
}

.animate-item {
    opacity: 0;
    transform: translateX(-20px);
    animation: slideIn 0.5s ease forwards;
}

.info-item {
    display: flex;
    margin-bottom: 15px;
    align-items: flex-start;
    padding: 10px 15px;
}

.info-label {
    min-width: 120px;
    font-weight: 600;
    color: #fff;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.info-content {
    display: flex;
    /**向下排列 */
    flex-direction: column;
    color: #fff;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.info-link {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.info-link:hover {
    color: #e6e6e6;
    text-decoration: underline;
}

@keyframes slideUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideIn {
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@media (max-width: 768px) {
    .banner {
        padding: 30px 0;
    }

    .info-item {
        flex-direction: column;
        align-items: flex-start;
    }

    .info-label {
        margin-bottom: 5px;
    }

    .animate-text {
        font-size: 2em;
    }

    .profile-img {
        width: 50px;
        height: 50px;
    }
}
</style>