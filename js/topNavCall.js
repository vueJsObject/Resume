$(function () {
    //根据配置生成对应的内容容器
    let topNavConfig = {
        navbarConfig: [
            // {
            //     id: "about",
            //     content: "关于我"
            // },

            // {
            //     id: "education",
            //     content: "兴趣爱好"
            // },

            // {
            //     id: "contact",
            //     content: "联系我"
            // },

            {
                id: "skills",
                content: "核心技能"
            },
            {
                id: "otherskills",
                content: "其它技能"
            },

            {
                id: "projects",
                content: "部分作品"
            },
            {
                id: "about",
                content: "自我评价"
            },
            // {
            //     id: "hobby",
            //     content: "兴趣爱好"
            // },
            // {
            //     id: "work",
            //     content: "工作经历"
            // },
        ],
        getBColor: (i) => {
            let bgColor = "";
            if(i % 2 === 0){
                bgColor = "background:#000;";
            }else {
                bgColor = "background: #262424;";
            }
            return bgColor
        },
        generateNavbarContent: function () {
            let html = '',
                navArray = this.navbarConfig;
            for (let i = 0; i < navArray.length; i++) {
                html += '<li><a href="#' + navArray[i].id + '" class="scroll">' + navArray[i].content + '</a></li>';
            }
            return html;
        },
        generateNavbarAfterBox: function () {
            let html = '',
                navArray = this.navbarConfig;
            for (let i = 0; i < navArray.length; i++) {
                if (navArray[i].id == "skills") {
                    html += '<div id="' + navArray[i].id + '" class="' + navArray[i].id + '" style="'+ topNavConfig.getBColor(i) +'">\n' +
                        '        <div class="container">\n' +
                        '           <h3 class="title">\n' +
                        '               <span>' + navArray[i].content + '</span>\n' +
                        '               <small style="font-size: 35%;">了解 < 熟悉 < 熟练 < 熟悉 </small>\n' +
                        '</h3>\n' +
                        '        </div>\n' +
                        '    </div>\n';
                } else if (navArray[i].id == "projects") {
                    html += '<div id="' + navArray[i].id + '" class="portfolio"  style="'+ topNavConfig.getBColor(i) +'">\n' +
                        '        <div class="container">\n' +
                        '           <h3 class="title wow zoomInLeft animated" data-wow-delay=".5s">' + navArray[i].content + '</h3>\n' +
                        '           <div class="sap_tabs">\n' +
                        '               <div id="horizontalTab" style="display: block; width: 100%; margin: 0px;">\n' +
                        // '                   <ul class="resp-tabs-list wow fadeInUp animated" data-wow-delay=".7s">\n' +
                        // '                   </ul>\n' +
                        // '                   <div class="clearfix"> </div>\n' +
                        // '                   <div class="resp-tabs-container">\n' +
                        // '                   </div>\n' +
                        '               </div>\n' +
                        '           </div>\n' +
                        '        </div>\n' +
                        '    </div>\n';
                } else {
                    html += '<div id="' + navArray[i].id + '" class="' + navArray[i].id + '"  style="'+ topNavConfig.getBColor(i) +'">\n' +
                        '        <div class="container">\n' +
                        '           <h3 class="title">' + navArray[i].content + '</h3>\n' +
                        '        </div>\n' +
                        '    </div>\n';
                }
            }
            return html;
        },
        generateAbouthtml: function () {
            return '            <div class="col-md-8 about-left ">\n' +
                '                <p>\n' +
                '                    本人勤奋踏实，工作认真负责，自学能力强;性格开朗，容易与人相处，注重团队协作精神，且能承受较大压力。\n' +
                '                </p>\n' +
                '                <p>\n' +
                '                    1. 本科学历，计算机信息管理专业\n' +
                '                </p>\n' +
                '                <p>\n' +
                '                    2. 三年全栈开发经验，前端熟悉使用bootstrap框加，d3，echarts，jquery,css3动画,h5等,\n' +
                '                    并有基于jquery的二次框开发插件经验,基于d3独立封装图形框架经验等,\n' +
                '                    Java熟悉使用spring boot,springMvc,Mybaits等主流Java开发框架;\n' +
                '                </p>\n' +
                '                <p>\n' +
                '                    3. 能熟练使用git，maven等工具;\n' +
                '                </p>\n' +
                '                <p>\n' +
                '                    4. 熟悉mysql/oracle等数据库;\n' +
                '                </p>\n' +
                '                <p>\n' +
                '                    5. 有良好的沟通能力，学习能力，适应能力，责任心。\n' +
                '                </p>\n' +
                '                <p>\n' +
                '                    6. 更多详情，请访问我的个人主页面 https://yanbo0039.gitee.io/ 页面有我部分的项目作品介绍\n' +
                '                </p>\n' +
                '                <p>\n' +
                '                    7. 若想了解更全面的作品，请访问我的github主页面 https://github.com/yanbo0039\n' +
                '                </p>\n' +
                '            </div>\n' +
                '            <div class="col-md-4 about-right">\n' +
                '                <ul>\n' +
                '                    <h5>荣誉证书</h5>\n' +
                '                    <li><span class="glyphicon glyphicon-menu-right"></span> 绵阳师范专科学历</li>\n' +
                '                    <li><span class="glyphicon glyphicon-menu-right"></span> 北京师范本科学历</li>\n' +
                '                    <li><span class="glyphicon glyphicon-menu-right"></span> 工信部认证中级网络工程师</li>\n' +
                '                    <li><span class="glyphicon glyphicon-menu-right"></span> 连续编程十小时不累奖 </li>\n' +
                '                    <li><span class="glyphicon glyphicon-menu-right"></span> 与人相处愉快不坑队友。。。</li>\n' +
                '                </ul>\n' +
                '                <div class="clearfix"> </div>\n' +
                '            </div>\n' +
                '            <div class="clearfix"> </div>';
        },
        generateWork: function () {
            return '            <div class="work-info">\n' +
                '                <div class="col-md-6 work-left">\n' +
                '                    <h4>2016 - 2019 </h4>\n' +
                '                </div>\n' +
                '                <div class="col-md-6 work-right">\n' +
                '                    <h5><span class="glyphicon glyphicon-briefcase"> </span> 北京**科技有限公司</h5>\n' +
                '                    <p>\n' +
                '                        2016年4月，独自踏上了北漂的路程，机缘巧合下加入了北京**科技有限公司，公司业务主要是网络、\n' +
                '                        运维、安全、流量，我在研发部门主要负责产品的前后端研发,因为是创业公司，所以加班是我们的日常，\n' +
                '                        下图就是我们研发小组大概凌晨一点的一次加餐，虽然很辛苦，但此刻大家都笑得那么开心，而我在大家都\n' +
                '                        面对镜头的那一瞬间却还沉浸在快餐盒里的美味无法自拔。。。。，详情请面聊。。\n' +
                '                    </p>\n' +
                '                    <img src="images/xieruan.jpg" alt="" class="img-responsive mt_5 cursor pe_img">\n' +
                '                </div>\n' +
                '                <div class="clearfix"> </div>\n' +
                '            </div>\n' +
                '            <div class="work-info">\n' +
                '                <div class="col-md-6 work-right work-right2">\n' +
                '                    <h4>2013 - 2015 </h4>\n' +
                '                </div>\n' +
                '                <div class="col-md-6 work-left work-left2">\n' +
                '                    <h5> 广州**智能科技有限公司 <span class="glyphicon glyphicon-briefcase"> </span></h5>\n' +
                '                    <p> 2013年01月进入广州**智能科技有限公司，主要负责项目实施。\n' +
                '                        帮助公司将公司项目布置运行在客户现场以及负责项目的bug解决和\n' +
                '                        客户培训及客户对公司项目的反馈意见等，下图为公司年会时来自全国\n' +
                '                        驻各个城市点的同事一起玩游戏时所拍的照片，虽然我的工作大多数时候是孤单的一个人在省内\n' +
                '                        各个城市到处跑，但因为有这个活动的存在，更能感觉到自己并不是一个人在战斗。。。\n' +
                '                    </p>\n' +
                '                    <img src="images/liqi.jpg" alt="" class="img-responsive mt_5 cursor pe_img">\n' +
                '                </div>\n' +
                '                <div class="clearfix"> </div>\n' +
                '            </div>\n' +
                '            <div class="work-info">\n' +
                '                <div class="col-md-6 work-left">\n' +
                '                    <h4>2012 - 2013 </h4>\n' +
                '                </div>\n' +
                '                <div class="col-md-6 work-right">\n' +
                '                    <h5><span class="glyphicon glyphicon-briefcase"> </span>成都***教育</h5>\n' +
                '                    <p>\n' +
                '                        2012年至2013期间在成都***教育参加了为期六个月的软件编程培训，\n' +
                '                        就读于百杰十六班，这段时间虽然短暂，但对我的人生影响是巨大的，\n' +
                '                        我终生以有此经历而荣。\n' +
                '                    </p>\n' +
                '                    <img src="images/bjtx.jpg" alt="" class="img-responsive mt_5 cursor pe_img">\n' +
                '                </div>\n' +
                '                <div class="clearfix"> </div>\n' +
                '            </div>\n' +
                '            <div class="work-info">\n' +
                '                <div class="col-md-6 work-right work-right2">\n' +
                '                    <h4>2009 - 2012 </h4>\n' +
                '                </div>\n' +
                '                <div class="col-md-6 work-left work-left2">\n' +
                '                    <h5> 大学毕业 <span class="glyphicon glyphicon-briefcase"></span> </h5>\n' +
                '                    <p>2012年正式毕业离校，母校校训：厚德 博学 笃行 弘毅 八字真言已深深的烙在我的内心。 </p>\n' +
                '                    <img src="images/graduation.jpg" alt="" class="img-responsive mt_5 cursor pe_img">\n' +
                '                </div>\n' +
                '                <div class="clearfix"> </div>\n' +
                '            </div>';
        },
        generateEducation: function () {
            return '            <div class="work-info">\n' +
                '                <div class="col-md-6 work-left">\n' +
                '                </div>\n' +
                '                <div class="col-md-6 work-right">\n' +
                '                    <h5><span class="glyphicon glyphicon-education"> </span> 健身</h5>\n' +
                '                    <p>\n' +
                '                        若有空闲时间，我会拿出一部分时间，请专业的私教来给我上课，达到针对性的锻炼的目的，\n' +
                '                        与这些个肌肉男在一起，总免不了一顿被虐。。。\n' +
                '                    </p>\n' +
                '                    <img src="images/js.jpg" alt="" class="img-responsive mt_5 cursor pe_img">\n' +
                '                </div>\n' +
                '                <div class="clearfix"> </div>\n' +
                '            </div>\n' +
                '            <div class="work-info">\n' +
                '                <div class="col-md-6 work-right work-right2">\n' +
                '                </div>\n' +
                '                <div class="col-md-6 work-left work-left2">\n' +
                '                    <h5> 跑步 <span class="glyphicon glyphicon-education"></span></h5>\n' +
                '                    <p>\n' +
                '                        曾先后三次参加城市马拉松，并且安全完赛，\n' +
                '                        现在跑步已经成为我生活中的一部分了，若能腾出时间自己每年都会去跑那么一次，\n' +
                '                        最好成绩曾一度接近国家六级运动员水平。。。\n' +
                '                    </p>\n' +
                '                    <img src="images/mls.jpg" alt="" class="img-responsive mt_5 cursor pe_img">\n' +
                '                </div>\n' +
                '                <div class="clearfix"> </div>\n' +
                '            </div>\n' +
                '            <div class="work-info">\n' +
                '                <div class="col-md-6 work-left">\n' +
                '                </div>\n' +
                '                <div class="col-md-6 work-right">\n' +
                '                    <h5><span class="glyphicon glyphicon-education"> </span> 跳舞</h5>\n' +
                '                    <p>\n' +
                '                        自己比较喜欢曳步舞，最喜欢的老师是强晶，也有自己的非盈利组织的舞团，\n' +
                '                        偶尔自己还时不时去那么一次。。。。\n' +
                '                    </p>\n' +
                '                    <img src="images/ybw.jpg" alt="" class="img-responsive mt_5 cursor pe_img">\n' +
                '                </div>\n' +
                '                <div class="clearfix"> </div>\n' +
                '            </div>';
        },
        generateContacthtml: function () {
            return '            <div class="contact-row">\n' +
                '                <div class="col-md-6 contact-left">\n' +
                '                    <iframe\n' +
                '                            src="http://map.baidu.com/#panoid=09002200011706171137054909Z&panotype=street&heading=0&pitch=0&l=19&tn=B_NORMAL_MAP&sc=0&newmap=1&shareurl=1&pid=09002200011706171137054909Z"></iframe>\n' +
                '                </div>\n' +
                '                <div class="col-md-6 contact-right">\n' +
                '                    <div class="address-left">\n' +
                '                        <p>北京朝阳区赵九路风景线,中国 </p>\n' +
                '                    </div>\n' +
                '                    <div class="address-right">\n' +
                '                        <p>电话 : 1500008888</p>\n' +
                '                        <p>E-mail : <a\n' +
                '                                href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=OwoLDg0MAwgIDgJ7SkoVWFRW"\n' +
                '                                target="_blank">fm185@sina.com</a></p>\n' +
                '                    </div>\n' +
                '                    <div class="clearfix"></div>\n' +
                '                    <div class="contact-form">\n' +
                '                        <form action="#" method="post">\n' +
                '                            <input type="text" name="Name" placeholder="Name" required="">\n' +
                '                            <input class="email" name="Email" type="text" placeholder="Email" required="">\n' +
                '                            <input class="phone" name="phone" type="text" placeholder="Phone" required="">\n' +
                '                            <textarea name="Message" placeholder="Message" required=""></textarea>\n' +
                '                            <input type="submit" value="提交">\n' +
                '                        </form>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '                <div class="clearfix"></div>\n' +
                '            </div>';
        }
    };
    $("title").text("涎涎的简历");
    $(".navbarContent").html(topNavConfig.generateNavbarContent());
    $(".top-nav").after(topNavConfig.generateNavbarAfterBox());


    // $("#about > .container > .title").after(topNavConfig.generateAbouthtml());
    // $("#work > .container > .title").after(topNavConfig.generateWork());
    // $("#education > .container > .title").after(topNavConfig.generateEducation());
    // $("#contact > .container > .title").after(topNavConfig.generateContacthtml());




    let abougConfig = {
        data: {
            content:  [
                {
                    title: "后端：",
                    data: [
                        "1.	熟悉Java常用API(JVM/IO/NIO/SOCKET/多线程/并发/网络/面向对象/设计原则/封装抽象);",
                        "2. 熟悉JavaWeb开发相关技术、常用的设计模式,掌握Java中常用的数据结构,了解JDK的新特性;",
                        "3. 熟悉Java并发包常用工具(锁/并发容器等等),了解并能使用常用的第三方库(Apache Commons/Guava);",
                        "4.	熟练掌握Spring/Spring Mvc/Spring Boot/SpringCloud/Mybatis/Dubbo/ElasticSearch等主流开发框架并了解底层原理;" +
                        "对Spring对应的事务管理中的传播策略十分熟悉;" ,
                        "5. 熟悉springCloud微服务架构，熟悉微服务相关技术栈(Dubbo/Eureka/Nacos),对并发编程/分布式事务有相当认知;" ,
                        "6.	熟练掌握分布式、缓存(Redis/Mongodb),消息中间件(Kafka/RocketMQ)的使用、性能分析及调优，及其优化技巧,有Thrift相关经验",
                        "7. 熟练掌握数据库(MySQL/Oracle/OceanBase)，并且能够正确熟练的建立索引和业务中要能正确合理的书写sql,能够熟练进行常规的sql优化;",
                        "8. 熟悉HTTP编程，能部署管理Tomcat，有Nginx使用经验",
                        "9. 熟悉容器（Docker/K8s）等技术并了解其原理,有大数据量存储及使用经验; ",
                        "10. 熟悉git、maven的常用命令,熟练运用idea工具高效编码,会使用工具查询日志,熟悉maven的常用插件,能够定位报警中的问题,",
                        "11. 熟悉Linux环境下系统的部署常用的指令，能够做基本的操作系统管理维护工作；",
                        "12. 有高并发互联网应用项目、互联网公司架构、微服务架构、分布式高并发系统开发设计经验、有较大规模微服务系统建设经历；",
                        "13. 有大型分布式、高并发(缓存架构、消息异步队列架构及分库分表)、高可用性系统设计和稳定性架构、多层架构体系开发/大型分布式/高并发/高负载/高可用性系统开发实战经验",
                        "14. 良好的编码习惯和代码能力，思路清晰，善于思考，具备一定的系统设计能力,良好的团队合作精神和积极主动的沟通意识，具有对新技术的追求精神，乐于分享",
                        "15. 具有良好的文档撰写习惯、文字表达能力及沟通能力，工作积极主动，沟通能力和团队合作精神，学习能力强，能够自我驱动学习掌握前沿技术，抗压能力强，可以接受短期高强度加班；",
                    ]
                },
                {
                    title: "前端：",
                    data: [
                        "1, 熟悉W3C标准，对表现与数据分离、Web语义化等有较为深刻的理解；",
                        "2. 熟悉JavaScrpt/HTML5/CSS3/Ajax等Web开发技术,熟悉页面架构和布局,能够独立开发 JS 模块，具有编写原生 JS 代码的能力",
                        "3. 熟悉ECMAScript、ES6等技术标准，有TypeScript开发经验；",
                        "4. 熟悉常见开源前端框架(React/Angular/Vue/JQuery)，理解源码，可对其扩展和优化，自己开发过公共开发库、框架,有 Gridsome 使用经验",
                        "5. 熟练使用less或sass进行前端开发，能够独立解决不同设备和环境下H5页面的UI兼容问题；" ,
                        "6. 熟悉Babel/Webpack/Gulp等构建工具配置和使用,对前端工程化与模块化/组件化开发有一定了解，能够设计高扩展性的前端应用",
                        "7. 熟悉Node.js应用开发，有Express/Koa/Egg.js等开发经验；",
                        "8. 熟悉 RESTful API,了解npm/yarn/cnpm等工具的常见使用方法； ",
                        "9. 熟悉浏览器的资源加载、渲染机制，熟悉性能优化、跨平台兼容性问题，有Web安全、以及系统架构能力和经验",
                        "10. 了解网络安全,有PostgreSQL/MySQL/Redis/Memcache等关系型非关系型数据库使用经验",
                        "11. 熟悉敏捷开发流程，能够快速融入环境，与产品、后端、测试保持良好的沟通和协作；",
                        "12. 技术视野广阔，有大型网站前端架构、性能、易用性等方面的实践经验；具备优秀的学习能力",
                        "13. 能够清晰理解业务，具备服务业务的合作精神；开发过程中可以识别出业务扩展点",
                        "14. 具备工程化的前端思维，具备较好的问题分析与解决能力；对系统性能优化有一定的思考，有一定的项目管理概念，可以识别出项目风险，" ,
                        "15. 具备一定的C端项目经验及线上问题排查能力；有后台管理系统开发经验,有独立负责项目经验",
                        "16. 具备一定的数据结构、算法基础；有较强的学习能力，独立思考能力；能快速上手新项目的需求设计和开发；",
                        "17. 具有良好的沟通能力，对技术有强烈的进取心，具有良好的分析和解决问题的能力，具备良好的团队合作精神。",
                        "18. 对技术有激情，喜欢钻研，能快速接受和掌握新技术，有较强的独立、主动的学习能力，良好的沟通表达能力和团队协作能力",
                        "19. 拥有良好的代码写作习惯以及职业的工作态度.能利用自身技术能力提升团队整体研发效率，提高团队影响力",
                        "20. 思路清晰，善于学习、总结，乐于分享,具有全面（pc端、手机端、小程序等）开发经验",
                    ]
                }
            ],
            aboutbox: {
                // title: "荣誉证书",
                title: "",
                item: [
                    // "绵阳师范专科学历",
                    // "北京师范本科学历",
                    // "工信部认证中级网络工程师",
                    // "连续编程十小时不累奖",
                    // "与人相处愉快不坑队友"
                ]
            }
        },
        generateAboutLeftHtml: () => {
            let html = '';
            if(abougConfig.data.content.length){
                let content = abougConfig.data.content;
                for (let i = 0; i < content.length; i++) {
                    let title = content[i].title,
                        data = content[i].data;
                    if(title){
                        html += '<h4 class="about_h4">' + title + '</h4>\n'
                    }
                    if(data.length){
                        for (let j = 0; j < data.length; j++) {
                            html += '<p class="about_p">' + data[j] + '</p>\n';
                        }
                    }
                    // html += '<p class="about_p">' + content[i] + '</p>\n';
                }
            }
            if(abougConfig.data.aboutbox.item.length){
                return '<div class="col-md-8 about-left ">\n' + html + '</div>\n'
            }else {
                return '<div class="col-md-12">\n' + html + '</div>\n'
            }
        },
        generateAboutRightHtml: () => {
            let html = '';
            if(abougConfig.data.aboutbox.item.length){
                html += '<div class="col-md-4 about-right">\n';
                html += '<ul>\n';

                let itemArray = abougConfig.data.aboutbox.item;
                let title = abougConfig.data.aboutbox.title;
                html += '<h5>'+ title +'</h5>\n';
                for (let i = 0; i < itemArray.length; i++) {
                    html += '<li><span class="glyphicon glyphicon-menu-right"></span>'+ itemArray[i] +'</li>\n';
                }
                html += '</ul>\n' +
                    '<div class="clearfix"> </div>\n' +
                    '</div>\n' +
                    '<div class="clearfix"> </div>';
            }
            return html;
        },
        generateAboutAllHtml: () => {
            return abougConfig.generateAboutLeftHtml() + abougConfig.generateAboutRightHtml();
        }
    }
    $("#about > .container > .title").after(abougConfig.generateAboutAllHtml());

    let hobbyConfig = {
        data: [
            {
                title: "五笔",
                content: "喜欢收集一些在交流过程中遇到的生僻字进行反复拆解"
            },
            {
                title: "背单词",
                content: "喜欢收集一些工作中遇到的计算机专业方面的英文单词"
            },
            {
                title: "做菜",
                content: "喜欢在周末做一些自己喜欢吃的菜"
            },
            {
                title: "收拾房间",
                content: "喜欢在周末对自己出租屋进行大扫除"
            }

        ],
        leftHtml: (time,title,content,imgSrc) => {
            return '<div class="work-info">\n' +
                '    <div class="col-md-6 work-right work-right2">\n' +
                (time ? '        <h4>'+ time +'</h4>\n' : '') +
                '    </div>\n' +
                '    <div class="col-md-6 work-left work-left2 time_border_right">\n' +
                '        <h5 class="cus_h5">'+ (title ? title : '') +'<span class="glyphicon glyphicon-briefcase"></span></h5>\n' +
                '        <p>'+ (content ? content : '') +'</p>\n' + (imgSrc ? '<img src="'+ imgSrc +'" alt="" class="img-responsive mt_5 cursor pe_img">\n' : '') +
                '    </div>\n' +
                '    <div class="clearfix"> </div>\n' +
                '</div>'
        },
        rightHtml: (time,title,content,imgSrc) => {
            return '<div class="work-info">\n' +
                '    <div class="col-md-6 work-left">\n' +
                (time ? '        <h4>'+ time +'</h4>\n' : '') +
                '    </div>\n' +
                '    <div class="col-md-6 work-right time_border_left">\n' +
                '        <h5 class="cus_h5"><span class="glyphicon glyphicon-briefcase"> </span>'+ (title ? title : '') +'</h5>\n' +
                '        <p>'+ (content ? content : '') +'</p>\n' + (imgSrc ? '<img src="'+ imgSrc +'" alt="" class="img-responsive mt_5 cursor pe_img">\n' : '') +
                '    </div>\n' +
                '    <div class="clearfix"> </div>\n' +
                '</div>\n'
        },
        generateWorkHtml: () => {
            let html = '';
            for (let i = 0; i < hobbyConfig.data.length; i++) {
                let time = hobbyConfig.data[i].time,
                    title = hobbyConfig.data[i].title,
                    content = hobbyConfig.data[i].content,
                    imgSrc = hobbyConfig.data[i].imgSrc;
                if(i % 2 === 0){
                    //偶数用左的html
                    html += hobbyConfig.leftHtml(time,title,content,imgSrc);
                }else {
                    //奇数用右的html
                    html += hobbyConfig.rightHtml(time,title,content,imgSrc);
                }
            }
            return html;
        }
    }

    $("#hobby > .container > .title").after(hobbyConfig.generateWorkHtml());



    let workConfig = {
        data: [
            {
                // time: "2009 - 2012 ",
                title: "大学毕业 ",
                content: "2012年正式毕业离校，母校校训：厚德 博学 笃行 弘毅 八字真言已深深的烙在我的内心。 ",
                // imgSrc: "images/graduation.jpg",
            },
            {
                time: "2012 - 2013 ",
                title: "成都***教育",
                content: '\n' +
    '                        2012年至2013期间在成都***教育参加了为期六个月的软件编程培训，\n' +
    '                        就读于百杰十六班，这段时间虽然短暂，但对我的人生影响是巨大的，\n' +
    '                        我终生以有此经历而荣。\n',
                // imgSrc: "images/bjtx.jpg",
            },
            {
                time: "22013 - 2015",
                title: "广州**智能科技有限公司",
                content: '2013年01月进入广州**智能科技有限公司，主要负责项目实施。\n' +
    '                        帮助公司将公司项目布置运行在客户现场以及负责项目的bug解决和\n' +
    '                        客户培训及客户对公司项目的反馈意见等，下图为公司年会时来自全国\n' +
    '                        驻各个城市点的同事一起玩游戏时所拍的照片，虽然我的工作大多数时候是孤单的一个人在省内\n' +
    '                        各个城市到处跑，但因为有这个活动的存在，更能感觉到自己并不是一个人在战斗。。。\n',
                // imgSrc: "images/liqi.jpg",
            },
            {
                time: "2016 - 2019 ",
                title: "北京**科技有限公司",
                content: '2016年4月，独自踏上了北漂的路程，机缘巧合下加入了北京**科技有限公司，公司业务主要是网络、\n' +
    '                        运维、安全、流量，我在研发部门主要负责产品的前后端研发,因为是创业公司，所以加班是我们的日常，\n' +
    '                        下图就是我们研发小组大概凌晨一点的一次加餐，虽然很辛苦，但此刻大家都笑得那么开心，而我在大家都\n' +
    '                        面对镜头的那一瞬间却还沉浸在快餐盒里的美味无法自拔。。。。，详情请面聊。。\n',
                // imgSrc: "images/xieruan.jpg",
            },

        ],
        leftHtml: (time,title,content,imgSrc) => {
            return '<div class="work-info">\n' +
                   '    <div class="col-md-6 work-right work-right2">\n' +
                (time ? '        <h4>'+ time +'</h4>\n' : '') +
                   '    </div>\n' +
                   '    <div class="col-md-6 work-left work-left2 time_border_right">\n' +
                   '        <h5 class="cus_h5">'+ (title ? title : '') +'<span class="glyphicon glyphicon-briefcase"></span> </h5>\n' +
                   '        <p>'+ (content ? content : '') +'</p>\n' + (imgSrc ? '<img src="'+ imgSrc +'" alt="" class="img-responsive mt_5 cursor pe_img">\n' : '') +
                   '    </div>\n' +
                   '    <div class="clearfix"> </div>\n' +
                   '</div>'
        },
        rightHtml: (time,title,content,imgSrc) => {
            return '<div class="work-info">\n' +
                   '    <div class="col-md-6 work-left">\n' +
                (time ? '        <h4>'+ time +'</h4>\n' : '') +
                   '    </div>\n' +
                   '    <div class="col-md-6 work-right time_border_left">\n' +
                   '        <h5 class="cus_h5"><span class="glyphicon glyphicon-briefcase"> </span>'+ (title ? title : '') +'</h5>\n' +
                   '        <p>'+ (content ? content : '') +'</p>\n' + (imgSrc ? '<img src="'+ imgSrc +'" alt="" class="img-responsive mt_5 cursor pe_img">\n' : '') +
                   '    </div>\n' +
                   '    <div class="clearfix"> </div>\n' +
                   '</div>\n'
        },
        generateWorkHtml: () => {
            let html = '';
            for (let i = 0; i < workConfig.data.length; i++) {
                let time = workConfig.data[i].time,
                    title = workConfig.data[i].title,
                    content = workConfig.data[i].content,
                    imgSrc = workConfig.data[i].imgSrc;
                if(i % 2 === 0){
                    //偶数用左的html
                    html += workConfig.leftHtml(time,title,content,imgSrc);
                }else {
                    //奇数用右的html
                    html += workConfig.rightHtml(time,title,content,imgSrc);
                }
            }
            return html;
        }
    };

    // $("#work > .container > .title").after(workConfig.generateWorkHtml());

    //为其它技能赋值 level 值请传入 0/1/2/3 四种值

    let skillObj = {
        skillsCore_left_html: '<div class="col-md-6 bar-grids">',
        skillsCore_right_html: '<div class="col-md-6 bar-grids">',
        skillsOther_left_html: '<div class="col-md-6 bar-grids">',
        skillsOther_right_html: '<div class="col-md-6 bar-grids">',
        levelTextArray: ["了解(25%)","熟悉(50%)","熟练(75%)","精通"],
        levelPointArray: ["25%","50%","75%","100%"],
        skillsCore_left: [
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
        ],
        skillsCore_right: [
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
            },
        ],
        skillOther_left: [
            {
                name: "JQuery UI / Jquery.jeBox / JQuery.jeDate / Jquery.dad / Jqeury.mosewheel",
                level: 1
            },
            {
                name: "Chosen / Icheck / Select / Bootstrap-select / Bootstrap-(table/table-export)",
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
                title:"前端构建打包工具"
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
        ],
        skillOther_right: [
            {
                name: "JQuery Gridly / JQuery.jsPlumb / HTML5Shiv / Respond / tableExport",
                level: 1
            },
            {
                name:"ECharts / Highcharts / Jtopo / D3",
                level:1
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
                name:"Redis / MongoDB / Elasticsearch / Cassandra / Neo4j ",
                level:0,
                title: "非关系型数据库"
            },
            {
                name:"SQL Serve / PostgreSQL / DB2 / SQLite / MariaDB / RDS / Cloud SQL",
                level:0,
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

        ],
        generateProgressHtml: (nameText, levelText, levelPoint,titleText) => {
            let h6 = '';
            if(titleText){
                h6 = '<h6>' +
                    '<span class="title_spn">'+ titleText + '：</span><br>' +
                    '<span>' + nameText + '</span><br>' +
                    '<span> ' + levelText + ' </span>' +
                    '</h6>\n';
            }else {
                h6 = '<h6>' +
                    '<span>' + nameText + '</span><br>' +
                    '<span> ' + levelText + ' </span>' +
                    '</h6>\n';
            }

            return h6 +
                '<div class="progress">\n' +
                '    <div class="progress-bar progress-bar-striped active" style="width: ' + levelPoint + '">\n' +
                '    </div>\n' +
                '</div>\n';


        },
        generateCoreSkillshtml: () => {
            if(skillObj.skillsCore_left.length > 0){
                for (let i = 0; i < skillObj.skillsCore_left.length; i++) {
                    let nameText = skillObj.skillsCore_left[i].name;
                    let titleText = skillObj.skillsCore_left[i].title;
                    let levelText = skillObj.levelTextArray[skillObj.skillsCore_left[i].level];
                    let levelPoint = skillObj.levelPointArray[skillObj.skillsCore_left[i].level];
                    let progressHtml = skillObj.generateProgressHtml(nameText, levelText, levelPoint,titleText);

                    skillObj.skillsCore_left_html += progressHtml;
                }
            }
            if(skillObj.skillsCore_right.length > 0){
                for (let i = 0; i < skillObj.skillsCore_right.length; i++) {
                    let nameText = skillObj.skillsCore_right[i].name;
                    let titleText = skillObj.skillsCore_right[i].title;
                    let levelText = skillObj.levelTextArray[skillObj.skillsCore_right[i].level];
                    let levelPoint = skillObj.levelPointArray[skillObj.skillsCore_right[i].level];
                    let progressHtml = skillObj.generateProgressHtml(nameText, levelText, levelPoint,titleText);

                    skillObj.skillsCore_right_html += progressHtml;
                }
            }
            return '<div class="skills-info">'
                + skillObj.skillsCore_left_html + '</div>\n'
                + skillObj.skillsCore_right_html + '</div>\n'
                + '</div>\n'
        },
        generateOtherSkillshtml: () => {
            if(skillObj.skillOther_left.length > 0){
                for (let i = 0; i < skillObj.skillOther_left.length; i++) {
                    let nameText = skillObj.skillOther_left[i].name;
                    let titleText = skillObj.skillOther_left[i].title;
                    let levelText = skillObj.levelTextArray[skillObj.skillOther_left[i].level];
                    let levelPoint = skillObj.levelPointArray[skillObj.skillOther_left[i].level];
                    let progressHtml = skillObj.generateProgressHtml(nameText, levelText, levelPoint,titleText);

                    skillObj.skillsOther_left_html += progressHtml;
                }
            }
            if(skillObj.skillOther_right.length > 0){
                for (let i = 0; i < skillObj.skillOther_right.length; i++) {
                    let nameText = skillObj.skillOther_right[i].name;
                    let titleText = skillObj.skillOther_right[i].title;
                    let levelText = skillObj.levelTextArray[skillObj.skillOther_right[i].level];
                    let levelPoint = skillObj.levelPointArray[skillObj.skillOther_right[i].level];
                    let progressHtml = skillObj.generateProgressHtml(nameText, levelText, levelPoint,titleText);

                    skillObj.skillsOther_right_html += progressHtml;
                }
            }
            return '<div class="skills-info">'
                + skillObj.skillsOther_left_html + '</div>\n'
                + skillObj.skillsOther_right_html + '</div>\n'
                + '</div>\n'
        }
    };
    //为核心技能赋值
    $("#skills > .container > .title").after(skillObj.generateCoreSkillshtml());
    // 为其它技能赋值
    $("#otherskills > .container > .title").after(skillObj.generateOtherSkillshtml());

    let projectConfig = {
        tabItemArray: {
            CSS:[
                {
                    url: "https://gitee.com/css3project/flexIndex",
                    title: "flexIndex是利用CSS的flex技术做的一个index demo",
                    img: "images/css1.png",
                    h3: "flexIndex",
                    p: "利用CSS的flex技术做的一个index demo"
                },
                {
                    url: "https://gitee.com/css3project/3dRotating_album",
                    title: "利用CSS3新特性实现css3d旋转相册小demo",
                    img: "images/css2.png",
                    h3: "3dRotating_album",
                    p: "利用CSS3新特性实现css3d旋转相册小demo"
                },
                {
                    url: "https://gitee.com/css3project/cssPageSmoothing",
                    title: "利用CSS3新特性实现点击页面平滑的效果",
                    img: "images/css3.png",
                    h3: "cssPageSmoothing",
                    p: "利用CSS3新特性实现点击页面平滑的效果"
                },
            ],
            JavaScript: [
                {
                    url: "https://gitee.com/jsobject/canvas_rain",
                    title: "利用原生JS以及原生CANVAS实现类似下雨的动画",
                    img: "images/JS1.png",
                    h3: "canvas_rain",
                    p: "利用原生JS以及原生CANVAS实现类似下雨的动画"
                },
                {
                    url: "https://gitee.com/jsobject/chooseName",
                    title: "利用原生JS以及ES6实现随机点名的功能",
                    img: "images/JS2.png",
                    h3: "chooseName",
                    p: "利用原生JS以及ES6实现随机点名的功能"
                },
                {
                    url: "https://github.com/javascriptObject/weibo",
                    title: "利用JS以及ES6和H5的新特性实现类似发表微博的功能",
                    img: "images/JS3.png",
                    h3: "weibo",
                    p: "利用JS以及ES6和H5的新特性实现类似发表微博的功能"
                },
            ],
            Jquery: [
                {
                    url: "https://gitee.com/JqueryObjects/tanMu",
                    title: "利用Jquery实现直播视频弹幕demo",
                    img: "images/Jquery1.png",
                    h3: "tanMu",
                    p: "利用Jquery实现直播视频弹幕demo"
                },
                {
                    url: "https://gitee.com/JqueryObjects/chief_Counsel",
                    title: "利用Jquery以及CSS3实现首席律师小项目",
                    img: "images/Jquery2.png",
                    h3: "chief_Counsel",
                    p: "利用Jquery以及CSS3实现首席律师小项目"
                },
                {
                    url: "https://gitee.com/JqueryObjects/piano_player",
                    title: "利用Jquery和H5新特性实现弹钢琴的小demo",
                    img: "images/Jquery3.png",
                    h3: "piano_player",
                    p: "利用Jquery和H5新特性实现弹钢琴的小demo"
                },
            ],
            Java: [
                {
                    url: "https://gitee.com/JavaObjects/tickets",
                    title: "购票网",
                    img: "images/Java1.png",
                    h3: "购票网",
                    p: "Java EE(Filter + HttpSession + servlet + JDBC连接池 + 单例模式) + Jsp 购票网"
                },
                {
                    url: "https://gitee.com/JavaObjects/ipm_boot",
                    title: "企业级网络流量监控，数据分析，拓扑梳理",
                    img: "images/Java2.png",
                    h3: "全栈性能管理与流量分析平台",
                    p: "SSM（Spring + Spring MVC + MyBatis）+BootStrap + HighCharts +Jtopo + d3 流量监控，网络安全，数据访问"
                },
                {
                    url: "https://github.com/javaobjects/yiling",
                    title: "以岭药业后台管理系统",
                    img: "images/Java4.png",
                    h3: "以岭药业后台管理系统",
                    p: "SpringCloud + SpringBoot + Mybatis-plus + Dubbo +RPC + Elasticsearch + Apache RocketMQ + Redis + Mysql + Vue + Element-UI + Echarts"
                },
            ]
        },
        generateprojecthtml: function (){
            let itemArray = Object.keys(this.tabItemArray);
            let itemhtml = '\n<ul class="resp-tabs-list wow fadeInUp animated" data-wow-delay=".7s">\n';
            let resptabcontenthtml = '<div class="resp-tabs-container">\n';

            for (let i = 0; i < itemArray.length; i++) {
                itemhtml += '<li class="resp-tab-item"><span>'+ itemArray[i] +'</span></li>\n';
                resptabcontenthtml += '<div class="tab-1 resp-tab-content" data-mytip="'+ itemArray[i] +'">\n' +
                    '<div class="tab_img">\n';
                let valItemArray = this.tabItemArray[itemArray[i]];

                for (let j = 0; j < valItemArray.length; j++) {
                    let url = valItemArray[j].url,
                        title = valItemArray[j].title,
                        img = valItemArray[j].img,
                        h3 = valItemArray[j].h3,
                        p = valItemArray[j].p;
                    resptabcontenthtml +=
                        '<div class="col-md-4 portfolio-grids">\n' +
                        '     <div class="grid">\n' +
                        '         <a href="'+ url +'" target="_blank"\n' +
                        '             title="'+ title +'">\n' +
                        '             <img src="'+ img +'" alt="" class="img-responsive" />\n' +
                        '             <div class="figcaption">\n' +
                        '                 <h3><span>'+ h3 +'</span></h3>\n' +
                        '                 <p>'+ p +'</p>\n' +
                        '             </div>\n' +
                        '         </a>\n' +
                        '     </div>\n' +
                        '</div>\n';

                }

                resptabcontenthtml += '<div class="clearfix"> </div>\n' +
                    '</div>\n' +
                    '</div>\n';
            }
            itemhtml += '</ul>\n' +
                '<div class="clearfix"> </div>\n';
            return itemhtml + resptabcontenthtml +'</div>\n';
        }
    };
    $("#projects #horizontalTab").html(projectConfig.generateprojecthtml());
});