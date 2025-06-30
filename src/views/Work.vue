<template>
    <Timeline :title="pageConfig.title" :items="workExperiences" />
</template>

<script>
import Timeline from '@/components/Timeline.vue';

export default {
    components: {
        Timeline
    },
    data() {
        return {
            // 页面标题配置
            pageConfig: {
                title: '工作经历'
            },
            // 工作经历数据
            workExperiences: [
                {
                    period: '2017 - 至今',
                    dotinner: '2017',
                    company: '北京蔚来汽车有限公司',
                    description: '2020年至今，作为高级Java开发工程师，负责蔚来汽车核心业务系统的开发和维护。主要工作包括微服务架构设计、性能优化、系统重构等。在工作中展现了优秀的技术能力和团队协作精神。'
                },
                {
                    period: '2016 - 2017',
                    dotinner: '2016',
                    company: '北京吉惠网络科技有限公司',
                    description: '2015年11月进入北京吉惠网络科技有限公司，主要负责网站后台维护，前端页面制作，设计。协同他人一起管理产品的上架，客户的沟通！'
                },
                {
                    period: '2015 - 2016',
                    dotinner: '2015',
                    company: '中国酒商网',
                    description: '2015年3月，负责中国酒商网客户产品图的优化，制作！客户网站排版风格设计！'
                },
                {
                    period: '2014 - 2015',
                    dotinner: '2014',
                    company: '河南工业大学就读参加结业考试',
                    description: '2014年先后取得河南工业大学专科学历证书和郑州大学自考本科学历！'
                }
            ]
        }
    }
}
</script>
