<template>
    <section class="projects" id="projects">
        <div class="container">
            <h3 class="title">项目经验</h3>
            <div class="projects-content">
                <div class="row">
                    <div class="col-md-6" v-for="(project, index) in projects" :key="project.title">
                        <Project :project="project" :style="{ animationDelay: `${index * 0.2}s` }" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import Project from '@/components/Project.vue'

/**
 * title 标题
 * description 描述
 * img 图片
 * technologies 标签
 * url 项目地址
 * demo 项目展示地址
 */
const projects = ref([
    {
        title: "响应式作品集",
        description: "使用HTML5和CSS3开发的响应式个人作品集网站，展示个人项目和技能。支持多设备适配，动画效果丰富。",
        img: "/images/css1.png",
        technologies: ["CSS3", "HTML5", "JavaScript", "Bootstrap"],
        url: "https://gitee.com/css3project/flexIndex",
        demo: ""
    },
    {
        title: "CSS动画",
        description: "利用CSS3新特性实现点击页面平滑的效果",
        img: "/images/css3.png",
        technologies: ["CSS3", "HTML5", "JavaScript", "Bootstrap"],
        url: "https://gitee.com/css3project/cssPageSmoothing",
        demo: ""
    },
    {
        title: "随机点名系统",
        description: "利用原生ES6实现的随机点名系统",
        img: "/images/JS2.png",
        technologies: ["JavaScript", "ES6+"],
        url: "https://gitee.com/jsobject/chooseName",
        demo: ""
    },
    {
        title: "微博评论系统",
        description: "利用原生ES6实现的微博评论系统",
        img: "/images/JS3.png",
        technologies: ["JavaScript", "ES6+"],
        url: "https://gitee.com/jsobject/simulationWeibo",
        demo: ""
    },
    {
        title: "企业官网常用模版",
        description: "利用Jquery技术实现了基本的企业官网页面功能，包含常见的企业展示，视频播放,以及其它用户逻辑交换等.",
        img: "/images/Jquery2.png",
        technologies: ["Jquery", "Video"],
        url: "https://gitee.com/JqueryObjects/chief_Counsel",
        demo: ""
    },
    {
        title: "钢琴小demo",
        description: "利用Jquery技术实现了声音的展示功能，能够让用户通过鼠标或键盘来实现弹奏钢琴的演示效果",
        img: "/images/Jquery3.png",
        technologies: ["Jquery", "Audio"],
        url: "https://gitee.com/JqueryObjects/piano_player",
        demo: ""
    },
    {
        title: "雨滴",
        description: "利用原生的JavaScript在Canvas上画出了下雨的动画场景",
        img: "/images/JS1.png",
        technologies: ["Canvas", "Audio", "JavaScript"],
        url: "https://gitee.com/jsobject/canvas_rain",
        demo: ""
    },
    {
        title: "D3力导向图",
        description: "利用D3二次封装的力导向图功能展示,常用于大项目的大屏数据展示",
        img: "/images/Svg_1.png",
        technologies: ["Svg", "D3", "Jquery"],
        url: "https://gitee.com/d3Object/d3ForceDemo",
        demo: ""
    },
    {
        title: "马拉松倒三角配速计划生成器",
        description: "原生的微信小程序代码实现马拉松计划配速生成的功能",
        img: "/images/WeChat_1.png",
        technologies: ["微信小程序"],
        url: "https://gitee.com/yanbo0039/marathonInvertedTriangle",
        demo: ""
    },
    {
        title: "时间价值计算器",
        description: "利用uni-app实现的计算和可视化个人时间价值的小程序",
        img: "/images/Uni-App_1.png",
        technologies: ["UNI-APP"],
        url: "https://gitee.com/yanbo0039/timeValue",
        demo: ""
    },
    {
        title: "个人简历",
        description: "利用Vue和Bootstrap实现的响应式的个人简历项目",
        img: "/images/Vue_Bootstrap_1.png",
        technologies: ["Vue", "Bootstrap"],
        url: "https://gitee.com/vueJsObject/Resume",
        demo: ""
    },
    {
        title: "企业级网络流量监控平台",
        description: "基于Spring Cloud的分布式架构，实现网络流量实时监控、数据分析和拓扑展示。包含流量采集、数据存储、实时分析、可视化展示等模块。",
        img: "/images/Java2.png",
        technologies: ["Spring Cloud", "Vue.js", "MySQL", "Redis", "Elasticsearch"],
        url: "https://gitee.com/JavaObjects/ipm_boot",
        demo: "https://demo.example.com/ipm"
    },
    {
        title: "以岭药业后台管理系统",
        description: "基于微服务架构的企业级管理系统，实现库存管理、订单处理、数据统计等功能。采用前后端分离架构，确保系统的可扩展性和维护性。",
        img: "/images/Java4.png",
        technologies: ["Spring Boot", "MyBatis Plus", "Vue", "Element UI", "Redis"],
        url: "https://github.com/javaobjects/yiling",
        demo: "https://demo.example.com/yiling"
    },
    {
        title: "在线教育平台",
        description: "基于Spring Boot的在线教育平台，实现课程管理、视频点播、在线考试等功能。采用微服务架构，支持高并发访问。",
        img: "/images/Java1.png",
        technologies: ["Spring Boot", "MyBatis", "Redis", "Vue.js", "MySQL"],
        url: "https://github.com/yanbo0039/edu-demo",
        demo: "https://demo.example.com/edu"
    },
    {
        title: "企业网站管理系统",
        description: "基于jQuery和Bootstrap的响应式企业网站，包含新闻管理、产品展示、在线留言等功能。注重用户体验和界面美观。",
        img: "/images/Jquery1.png",
        technologies: ["jQuery", "Bootstrap", "HTML5", "CSS3", "MySQL"],
        url: "https://github.com/yanbo0039/company-website",
        demo: "https://demo.example.com/company"
    },
    {
        title: "个人博客系统",
        description: "使用Vue.js开发的个人博客系统，支持文章发布、评论管理、标签分类等功能。采用前后端分离架构。",
        img: "/images/JS1.png",
        technologies: ["Vue.js", "Element UI", "Node.js", "MongoDB"],
        url: "https://github.com/yanbo0039/blog-vue",
        demo: "https://demo.example.com/blog"
    },

])
</script>

<style scoped>
.projects {
    background: #f8f9fa;
}
</style>