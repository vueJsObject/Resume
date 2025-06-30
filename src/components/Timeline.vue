<template>
    <div class="timeline">
        <div class="container">
            <h3 class="title">{{ title }}</h3>
            <div class="timeline-container fade-in">
                <div class="timeline-item" v-for="(item, index) in items" :key="index">
                    <div class="timeline-content">
                        <div class="timeline-period" :style="{ animationDelay: `${index * 0.2}s` }">
                            <i class="bi bi-calendar"></i>
                            {{ item.period }}
                        </div>
                        <div class="timeline-dot">
                            <div class="dot-inner">
                                <span>
                                    {{ item.dotinner }}
                                </span>
                            </div>
                        </div>
                        <div class="timeline-details" :style="{ animationDelay: `${index * 0.2}s` }">
                            <h4>
                                <i class="bi bi-briefcase"></i>
                                {{ item.company || item.title }}
                            </h4>
                            <p>{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        items: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.timeline {
    background: #262424;
    position: relative;
    overflow: hidden;
}

.timeline-container {
    position: relative;
    max-width: 1200px;
    padding: 0 40px;
    margin-top: 65px;
}

.timeline-container::before {
    content: '';
    height: 100%;
    width: 2px;
    border: 2px dashed #00A79B;
    transform: translateX(-50%);
    position: absolute;
    left: 50%;
    top: 30px;

}

.timeline-container::after {
    content: '';
    display: block;
    clear: both;
}

.timeline-item {
    width: 50%;
    position: relative;
}



.timeline-item:nth-child(odd) {
    margin: 0 50px 50px 0;
    padding: 5px 75px 5px 5px;
    float: left;
}

.timeline-item:nth-child(even) {
    margin: 0 0 50px 50px;
    padding: 5px 5px 5px 75px;
    float: right;
}

.timeline-content {
    padding: 15px 15px 15px 40px;
    border: 2px solid #00A79B;
    display: block;
}

.timeline-item:nth-child(odd) .timeline-content {
    border-radius: 15px 0 15px 15px;
}

.timeline-item:nth-child(even) .timeline-content {
    border-radius: 0 15px 15px 15px;
}

.timeline-content::after {
    content: '';
    background-color: #00A79B;
    height: 18px;
    width: 15px;
    position: absolute;
    top: 5px;
    clip-path: polygon(100% 0, 0 0, 0 100%);
}

.timeline-item:nth-child(odd) .timeline-content::after {
    right: 60px;
}

.timeline-item:nth-child(even) .timeline-content::after {
    transform: rotateY(180deg);
    left: 60px;
}

.timeline-period {
    color: #007bff;
    font-size: 1.1em;
    margin-bottom: 15px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
    /** 引用动画 */
    opacity: 0;
    animation: fadeInItem 0.5s ease forwards;
}

.timeline-period i {
    font-size: 1.2em;
}

.timeline-dot {
    position: absolute;
    width: 24px;
    height: 24px;
    background: rgba(0, 123, 255, 0.2);
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    top: 10px;
    /* 添加过渡效果，使放大更平滑 */
    transition: transform 0.3s ease;
}

.dot-inner {
    height: 100px;
    width: 100px;
    background-color: #00A79B;
    border-radius: 50%;
    color: #fff;
    font-size: 32px;
    font-weight: 900;
    text-align: center;
    line-height: 98px;
    position: absolute;
}

.dot-inner:after {
    content: '';
    height: 130px;
    width: 130px;
    border: 8px solid #00A79B;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
}


.timeline-item:nth-child(odd) .timeline-dot {
    left: calc(100% - 12px);
}

.timeline-item:nth-child(even) .timeline-dot {
    right: calc(100% - 12px);
}

.timeline-item:nth-child(odd) .dot-inner::after {
    transform: translateX(-50%) translateY(-50%) rotate(-20deg);
    border-left-color: transparent;
}

.timeline-item:nth-child(even) .dot-inner::after {
    transform: translateX(-50%) translateY(-50%) rotate(20deg);
    border-right-color: transparent;
}

/** 引用动画 */
.timeline-details {
    opacity: 0;
    animation: fadeInItem 0.5s ease forwards;
}

.timeline-details h4 {
    color: #fff;
    margin-bottom: 15px;
    font-size: 1.4em;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 10px;
}

.timeline-details h4 i {
    color: #007bff;
    font-size: 1.2em;
}

.timeline-details p {
    color: #ccc;
    line-height: 1.8;
    font-size: 1.1em;
}

.timeline-content:hover {
    box-shadow: 0 10px 30px rgba(0, 123, 255, 0.2);
    background: rgba(255, 255, 255, 0.05);
}

.timeline-dot:hover {
    cursor: pointer;
    /* 放大一倍 */
    transform: scale(1.1);
}

@media (max-width: 768px) {
    .title {
        font-size: 2.2em;
    }
}

@media (max-width: 480px) {
    .title {
        font-size: 1.8em;
        margin-bottom: 3em;
    }

    .timeline-content {
        padding: 0;
    }

    .timeline-period {
        font-size: 1em;
    }

    .timeline-details h4 {
        font-size: 1.2em;
    }

    .timeline-details p {
        font-size: 1em;
    }
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
</style>