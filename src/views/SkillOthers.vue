<template>
    <!-- 其它技能部分 -->
    <Skill :skills="otherSkills" :title="'其它技能'" :subtitle="'了解 < 熟悉 < 熟练 < 精通'" />
</template>

<script setup>
import Skill from '@/components/Skill.vue'

// 技能数据
const otherSkills = [
    {
        name: "JQuery UI / Jquery.jeBox / JQuery.jeDate / Jquery.dad / Jqeury.mosewheel",
        level: 1
    },
    {
        name: "JQuery Gridly / JQuery.jsPlumb / HTML5Shiv / Respond / tableExport",
        level: 1
    },
    {
        name: "Chosen / Icheck / Select / Bootstrap-select / Bootstrap-(table/table-export)",
        level: 1
    },
    {
        name: "ECharts / Highcharts / Jtopo / D3",
        level: 1
    },
    {
        name: "Sass / Less / Stylus",
        level: 0,
        title: "Css预处理器"
    },
    {
        name: "Chrome DevTools / Firebug / Firefox DevTools",
        level: 1,
        title: "Web应用程序调式工具"
    },
    {
        name: "Node.js",
        level: 0,
        title: "前端js本地运行环境"
    },
    {
        name: "Nvm",
        level: 0,
        title: "前端Node版本管理工具"
    },
    {
        name: "Express / Koa / Egg.js / NestJS",
        level: 0,
        title: "Node.js的Web应用程序框架"
    },
    {
        name: "Npm / Cnpm / Yarn / Pnpm",
        level: 0,
        title: "前端包管理工具"
    },
    {
        name: "Jest / Mocha / Cypress",
        level: 0,
        title: "前端自动化测试工具"
    },
    {
        name: "React(Native + Redux + Router + Axios) / Angular(CLI + RxJS + Material + Material)",
        level: 0,
        title: "前端框架"
    },
    {
        name: "Vite / Webpack / Babel / Gulp / Grunt / Parcel / Rollup / Brunch / browserify",
        level: 0,
        title: "前端构建打包工具"
    },
    {
        name: "Eclipse / IDEA / Sublime / Visual Studio Code / Visual Studio / NetBeans",
        level: 2,
        title: "开发工具"
    },
    {
        name: "Git / Svn / Mercurial / Perforce",
        level: 2,
        title: "版本控制工具"
    },
    {
        name: "Xmind / MindManager / Typora / 有道云笔记",
        level: 2,
        title: "思维脑图工具和Markdown 编辑器"
    },
    {
        name: "向日葵 / ToDesk",
        level: 1,
        title: "远程连接工具"
    },
    {
        name: "WebSocket / Ajax / SSE / RESTful API / Webhooks / Comet",
        level: 0,
        title: "跨前后端通信技术"
    },
    {
        name: "Nginx / Apache HTTP Server / HAProxy",
        level: 0,
        title: "反向代理服务器"
    },
    {
        name: "Tomcat / Jetty / Undertow / Jboss / WildFly / NanoHTTPD / Apache HTTP Server ",
        level: 0,
        title: "JavaWeb服务器"
    },
    {
        name: "Kubernetes / Spring Cloud / Istio / ServiceComb",
        level: 0,
        title: "Java微服务架构"
    },
    {
        name: "Dubbo / Spring Cloud / Thrift / gRPC / ServiceComb",
        level: 0,
        title: "Java分布式服务框架"
    },
    {
        name: "Memcached / Hazelcast / Ignite / Couchbase",
        level: 0,
        title: "分布式内存对象缓存系统"
    },
    {
        name: "Maven / Gradle / Ant",
        level: 0,
        title: "Java自动化构建工具"
    },
    {
        name: "Docker / Podman / Kubernetes(K8s) / Apache Mesos / OpenShift",
        level: 0,
        title: "Java容器化工具"
    },
    {
        name: "Redis / MongoDB / Elasticsearch / Cassandra / Neo4j ",
        level: 0,
        title: "非关系型数据库"
    },
    {
        name: "SQL Serve / PostgreSQL / DB2 / SQLite / MariaDB / RDS / Cloud SQL",
        level: 0,
        title: "关系型数据库"
    },
    {
        name: "Navicat / PLSQL / RedisDesktopManager",
        level: 1,
        title: "数据库管理工具"
    },
    {
        name: "Postman / Swagger / Insomnia / JMeter",
        level: 0,
        title: "API测试工具"
    },
    {
        name: "Github Action / Jenkins / Travis CI / CircleCI / (GitLab CI/CD)",
        level: 2,
        title: "自动化构建和部署工具"
    },
    {
        title: "AI工具",
        level: 2,
        name: "ChatGPT / Copilot / KIMI / Cursor / Windsurf / Trae / DeepSeek / Claude",
    }
]
</script>