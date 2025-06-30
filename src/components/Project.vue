<template>
    <div class="project-card">
        <div class="project-image">
            <img :src="project.img" :alt="project.title" class="img-fluid">
            <div class="project-overlay">
                <a :href="project.url" target="_blank" class="view-project">
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>
        <div class="project-info">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="tech-stack">
                <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                    {{ tech }}
                </span>
            </div>
            <div class="project-links">
                <a :href="project.url" target="_blank" class="btn btn-primary">
                    <i class="fab fa-github"></i> 查看源码
                </a>
                <a :href="project.demo || 'javascript:void(0)'" :target="project.demo ? '_blank' : ''"
                    class="btn btn-outline-primary">
                    <i class="fas fa-play-circle"></i> 在线演示
                </a>
            </div>
        </div>
    </div>
</template>
<script setup>

const props = defineProps({
    project: {
        type: Object,
        required: true
    }
})
</script>
<style scoped>
.project-card {
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    opacity: 0;
    animation: fadeInItem 0.6s ease forwards;
}



/* 动画 */
@keyframes fadeInItem {
    from {
        opacity: 0;
        transform: translate(0, -50px);
    }

    to {
        opacity: 1;
        transform: translate(0, 0);
    }
}


.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.project-image {
    position: relative;
    overflow: hidden;
}

.project-image img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.project-card:hover .project-image img {
    transform: scale(1.05);
}

.project-card:hover .project-overlay {
    opacity: 1;
}

.view-project {
    color: #fff;
    font-size: 2rem;
    transition: transform 0.3s ease;
}

.view-project:hover {
    transform: scale(1.1);
}

.project-info {
    padding: 20px;
}

.project-title {
    font-size: 1.4rem;
    color: #333;
    margin-bottom: 15px;
}

.project-description {
    color: #666;
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 20px;
}

.tech-stack {
    margin-bottom: 20px;
}

.tech-tag {
    display: inline-block;
    padding: 5px 12px;
    margin: 4px;
    background: #e9ecef;
    border-radius: 20px;
    font-size: 0.85rem;
    color: #555;
    transition: all 0.3s ease;
}

.tech-tag:hover {
    background: #007bff;
    color: #fff;
}

.project-links {
    display: flex;
    gap: 10px;
}

.btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border-radius: 5px;
    transition: all 0.3s ease;
}

.btn i {
    font-size: 1.1em;
}

@media (max-width: 768px) {
    .projects {
        padding: 40px 0;
    }

    .title {
        font-size: 2rem;
    }

    .project-image img {
        height: 200px;
    }

    .project-links {
        flex-direction: column;
    }

    .btn {
        width: 100%;
        justify-content: center;
    }
}
</style>