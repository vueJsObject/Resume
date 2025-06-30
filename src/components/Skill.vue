<template>
    <div class="skills">
        <div class="container">
            <h3 v-if="title" class="title">
                <span>{{ title }}</span>
                <small style="font-size: 35%;color:#fff">{{ subtitle }}</small>
            </h3>
            <div class="skills-info fade-in">
                <div class="col-md-6 bar-grids">
                    <div v-for="(skill, index) in leftSkills" :key="index" class="skill-item"
                        :style="{ animationDelay: `${index * 0.2}s` }">
                        <h6>
                            <template v-if="skill.title">
                                <span class="title_spn">{{ skill.title }}：</span><br>
                            </template>
                            <span>{{ skill.name }}</span><br>
                            <span>{{ getLevelText(skill.level) }}</span>
                        </h6>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped"
                                :style="{ width: getLevelPoint(skill.level) }"
                                :title="`掌握程度: ${getLevelText(skill.level)}`">
                                <span class="progress-tooltip">{{ getLevelText(skill.level) }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 bar-grids">
                    <div v-for="(skill, index) in rightSkills" :key="index + leftSkills.length" class="skill-item"
                        :style="{ animationDelay: `${index * 0.2}s` }">
                        <h6>
                            <template v-if="skill.title">
                                <span class="title_spn">{{ skill.title }}：</span><br>
                            </template>
                            <span>{{ skill.name }}</span><br>
                            <span>{{ getLevelText(skill.level) }}</span>
                        </h6>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped"
                                :style="{ width: getLevelPoint(skill.level) }"
                                :title="`掌握程度: ${getLevelText(skill.level)}`">
                                <span class="progress-tooltip">{{ getLevelText(skill.level) }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
    skills: {
        type: Array,
        required: true
    },
    title: {
        type: String,
        required: false,
        default: ''
    },
    subtitle: {
        type: String,
        required: false,
        default: '了解 < 熟悉 < 熟练 < 精通'
    },
    background: {
        type: String,
        required: false,
        default: '#000'
    }
})

// 技能等级配置
const levelConfig = {
    levelTextArray: ["了解", "熟悉", "熟练", "精通"],
    levelPointArray: ["25%", "50%", "75%", "100%"]
}

// 获取等级文本
const getLevelText = (level) => {
    const text = levelConfig.levelTextArray[level]
    const percentage = levelConfig.levelPointArray[level]
    return `${text}(${percentage})`
}

// 获取等级百分比
const getLevelPoint = (level) => levelConfig.levelPointArray[level]

// 计算左右列技能
const leftSkills = computed(() => props.skills.filter((_, index) => index % 2 === 0))
const rightSkills = computed(() => props.skills.filter((_, index) => index % 2 === 1))

</script>

<style scoped>
.skills {
    transition: background-color 0.3s ease;
    background: #262424;
}

.skills-info {
    max-width: 1200px;
}

.bar-grids {
    width: 50%;
    float: left;
    padding: 0 20px;
}

.skill-item {
    position: relative;
    margin-bottom: 40px;
    padding: 20px;
    opacity: 0;
    animation: fadeInItem 0.6s ease forwards;

    /* will-change: transform, opacity; */

    /* animation: fadeInItem 1.5s ease-out forwards; */
}

/* 动画 */
@keyframes fadeInItem {
    from {
        opacity: 0;
        transform: translate(-50px, 0);
    }

    to {
        opacity: 1;
        transform: translate(0, 0);
    }
}



.skill-item:hover {
    transform: translateX(10px);
    background: rgba(0, 139, 139, 0.15);
    box-shadow: 0 0 20px rgba(0, 139, 139, 0.2);
}

h6 {
    font-size: 1em;
    line-height: 1.6;
    color: #fff;
    margin-bottom: 15px;
    letter-spacing: 0.5px;
}

h6 span {
    display: block;
    margin-bottom: 8px;
    word-wrap: break-word;
}

/* h6 span:last-child {
    color: #20B2AA;
    font-size: 0.9em;
    opacity: 0.9;
    transition: opacity 0.3s ease;
} */

.skill-item:hover h6 span:last-child {
    opacity: 1;
}

.progress {
    position: relative;
    margin-top: 15px;
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    overflow: hidden;
}

.progress-bar {
    background: linear-gradient(45deg, #008B8B, #20B2AA);
    transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    width: 0;
    height: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
}

.progress-tooltip {
    position: absolute;
    top: -30px;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.8em;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.progress:hover .progress-tooltip {
    opacity: 1;
}

@keyframes fadeIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* .fade-in.visible {
    animation-play-state: running;
} */

.title_spn {
    color: #F7E612;
    font-size: 0.9em;
    margin-bottom: 8px;
    display: inline-block;
    padding: 4px 10px;
    background: rgba(247, 230, 18, 0.1);
    border-radius: 4px;
    box-shadow: 0 0 15px rgba(247, 230, 18, 0.1);
    transform: translateZ(0);
    will-change: transform;
    transition: all 0.3s ease;
}

.skill-item:hover .title_spn {
    background: rgba(247, 230, 18, 0.15);
    box-shadow: 0 0 20px rgba(247, 230, 18, 0.15);
}

/* 进度条纹样式 ***/
.progress-bar-striped {
    background-image: linear-gradient(45deg,
            rgba(0, 206, 209, 0.5) 25%,
            transparent 25%,
            transparent 50%,
            rgba(0, 206, 209, 0.5) 50%,
            rgba(0, 206, 209, 0.5) 75%,
            transparent 75%,
            transparent);
    background-size: 0.8rem 0.8rem;
    animation: progress-bar-stripes 1s linear infinite;
}

@keyframes progress-bar-stripes {
    from {
        background-position: 1rem 0;
    }

    to {
        background-position: 0 0;
    }
}

/* 响应式设计 */
@media (max-width: 768px) {
    .bar-grids {
        width: 100%;
        float: none;
    }

    .skill-item {
        padding: 15px;
        border: 1px dashed #20B2AA;
        margin-bottom: 30px;
    }

    .skill-item:hover {
        transform: translateX(5px);
    }

    /* 为了让底部元素不被footer遮住 */
    .skills-info {
        margin-bottom: 104px;
    }

    h6 {
        font-size: 0.9em;
        margin-bottom: 12px;
    }

    .progress {
        height: 6px;
    }
}
</style>