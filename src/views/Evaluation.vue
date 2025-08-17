<template>
    <div class="evaluation">
        <div class="container">
            <h3 class="title">
                <span>自我评价</span>
            </h3>
            <div class="evaluation-content fade-in">
                <ul>
                    <li v-for="(item, index) in evaluationList" :key="index" :style="{
                        animationDelay: `${index * 0.2}s`,
                        '--bullet': item.bullet === false ? 'none' : `'${item.bullet || '•'}'`
                    }">
                        <span>{{ item.text || item }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
// , bullet: "◉" , bullet: "→"  , bullet: "🔍"  , bullet: "📦" 
const evaluationList = ref([
    { text: "后端：", bullet: false },
    { text: "1.	熟悉Java常用API(JVM/IO/NIO/SOCKET/多线程/并发/网络/面向对象/设计原则/封装抽象);" },
    { text: "2. 熟悉JavaWeb开发相关技术、常用的设计模式,掌握Java中常用的数据结构,了解JDK的新特性;" },
    { text: "3. 熟悉Java并发包常用工具(锁/并发容器等等),了解并能使用常用的第三方库(Apache Commons/Guava);" },
    { text: "4.	熟练掌握Spring/Spring Mvc/Spring Boot/SpringCloud/Mybatis/Dubbo/ElasticSearch等主流开发框架并了解底层原理;" },
    { text: "5. 熟悉springCloud微服务架构，熟悉微服务相关技术栈(Dubbo/Eureka/Nacos),对并发编程/分布式事务有相当认知;" },
    { text: "6.	熟练掌握分布式、缓存(Redis/Mongodb),消息中间件(Kafka/RocketMQ)的使用、性能分析及调优，及其优化技巧,有Thrift相关经验" },
    { text: "7. 熟练掌握数据库(MySQL/Oracle/OceanBase)，并且能够正确熟练的建立索引和业务中要能正确合理的书写sql,能够熟练进行常规的sql优化;" },
    { text: "8. 熟悉HTTP编程，能部署管理Tomcat，有Nginx使用经验" },
    { text: "9. 熟悉容器（Docker/K8s）等技术并了解其原理,有大数据量存储及使用经验; " },
    { text: "10. 熟悉git、maven的常用命令,熟练运用idea工具高效编码,会使用工具查询日志,熟悉maven的常用插件,能够定位报警中的问题," },
    { text: "11. 熟悉Linux环境下系统的部署常用的指令，能够做基本的操作系统管理维护工作；" },
    { text: "12. 有高并发互联网应用项目、互联网公司架构、微服务架构、分布式高并发系统开发设计经验、有较大规模微服务系统建设经历；" },
    { text: "13. 有大型分布式、高并发(缓存架构、消息异步队列架构及分库分表)、高可用性系统设计和稳定性架构、多层架构体系开发/大型分布式/高并发/高负载/高可用性系统开发实战经验" },
    { text: "14. 良好的编码习惯和代码能力，思路清晰，善于思考，具备一定的系统设计能力,良好的团队合作精神和积极主动的沟通意识，具有对新技术的追求精神，乐于分享" },
    { text: "15. 具有良好的文档撰写习惯、文字表达能力及沟通能力，工作积极主动，沟通能力和团队合作精神，学习能力强，能够自我驱动学习掌握前沿技术，抗压能力强，可以接受短期高强度加班；" },
    { text: "前端：", bullet: false },
    { text: "1, 熟悉W3C标准，对表现与数据分离、Web语义化等有较为深刻的理解；" },
    { text: "2. 熟悉JavaScrpt/HTML5/CSS3/Ajax等Web开发技术,熟悉页面架构和布局,能够独立开发 JS 模块，具有编写原生 JS 代码的能力" },
    { text: "3. 熟悉ECMAScript、ES6等技术标准，有TypeScript开发经验；" },
    { text: "4. 熟悉常见开源前端框架(React/Angular/Vue/JQuery)，理解源码，可对其扩展和优化，自己开发过公共开发库、框架,有 Gridsome 使用经验" },
    { text: "5. 熟练使用less或sass进行前端开发，能够独立解决不同设备和环境下H5页面的UI兼容问题；" },
    { text: "6. 熟悉Babel/Webpack/Gulp等构建工具配置和使用,对前端工程化与模块化/组件化开发有一定了解，能够设计高扩展性的前端应用" },
    { text: "7. 熟悉Node.js应用开发，有Express/Koa/Egg.js等开发经验；" },
    { text: "8. 熟悉 RESTful API,了解npm/yarn/cnpm等工具的常见使用方法； " },
    { text: "9. 熟悉浏览器的资源加载、渲染机制，熟悉性能优化、跨平台兼容性问题，有Web安全、以及系统架构能力和经验" },
    { text: "10. 了解网络安全,有PostgreSQL/MySQL/Redis/Memcache等关系型非关系型数据库使用经验" },
    { text: "11. 熟悉敏捷开发流程，能够快速融入环境，与产品、后端、测试保持良好的沟通和协作；" },
    { text: "12. 技术视野广阔，有大型网站前端架构、性能、易用性等方面的实践经验；具备优秀的学习能力" },
    { text: "13. 能够清晰理解业务，具备服务业务的合作精神；开发过程中可以识别出业务扩展点" },
    { text: "14. 具备工程化的前端思维，具备较好的问题分析与解决能力；对系统性能优化有一定的思考，有一定的项目管理概念，可以识别出项目风险，" },
    { text: "15. 具备一定的C端项目经验及线上问题排查能力；有后台管理系统开发经验,有独立负责项目经验" },
    { text: "16. 具备一定的数据结构、算法基础；有较强的学习能力，独立思考能力；能快速上手新项目的需求设计和开发；" },
    { text: "17. 具有良好的沟通能力，对技术有强烈的进取心，具有良好的分析和解决问题的能力，具备良好的团队合作精神。" },
    { text: "18. 对技术有激情，喜欢钻研，能快速接受和掌握新技术，有较强的独立、主动的学习能力，良好的沟通表达能力和团队协作能力" },
    { text: "19. 拥有良好的代码写作习惯以及职业的工作态度.能利用自身技术能力提升团队整体研发效率，提高团队影响力" },
    { text: "20. 思路清晰，善于学习、总结，乐于分享,具有全面（pc端、手机端、小程序等）开发经验" },
])


</script>

<style scoped>
.title {
    margin-bottom: 5px;
}

.evaluation {
    background: #000;
}

.evaluation-content {
    background: rgba(255, 255, 255, 0.02);
    /* border: 1px dashed rgba(255, 255, 255, 0.1); */
    border-radius: 8px;
    transition: all 0.3s ease;
    margin-bottom: 60px;
}

.evaluation-content:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.evaluation-content ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.evaluation-content li {
    color: #ffffff;
    padding: 15px 0 15px 25px;
    position: relative;
    line-height: 1.6;
    font-size: 1.1em;
    opacity: 0;
    animation: fadeInItem 0.5s ease forwards;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

/* .evaluation-content li:last-child {
    border-bottom: none;
} */

.evaluation-content li::before {
    content: var(--bullet, '•');
    position: absolute;
    left: 0;
    color: #008B8B;
    font-size: 1.5em;
    line-height: 1;
}

/* .fade-in {
    opacity: 0.5;
    transform: translateY(10px);
    animation: fadeIn 0.8s ease forwards;
    animation-play-state: running;
} */

/* .fade-in.visible {
    animation-play-state: running;
} */



@keyframes fadeInItem {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@media (max-width: 768px) {
    .title {
        font-size: 2em;
    }

    .evaluation-content {
        margin-bottom: 104px;
    }

    .evaluation-content li {
        font-size: 1em;
        padding: 12px 0 12px 20px;
    }
}
</style>