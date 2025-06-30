<template>
    <!-- 核心技能部分 -->
    <Skill :skills="coreSkills" :title="'核心技能'" :subtitle="'了解 < 熟悉 < 熟练 < 精通'"/>
</template>

<script setup>
import Skill from '@/components/Skill.vue'

// 技能数据
const coreSkills = [
    {
        name: "Html / Css / JavaScript / Jquery / Java基础 /高级",
        level: 2
    },
    {
        name: "Vue(vueJs + Vue Router + Vuex + Vue CLI + Vue Devtools)",
        level: 1
    },
    {
        name: "SpringBoot(SpringFramework+SpringMVC+SpringData+SpringDataJPA)",
        level: 1
    },
    {
        name: "Bootstrap(css库+Js库+Icons库+Themes+Layout)",
        level: 2
    },
    {
        name: "SpringBoot(Spring Security+Spring Cloud+Spring Boot Actuator)",
        level: 1
    },
    {
        name: "ES6+ / Java8 +/ Oracle / MySql",
        level: 1
    }
]
</script>