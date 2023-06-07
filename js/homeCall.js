$(function (){

    let homeConfig =  {

        img:'<img src="images/me.jpg" alt="" class="cursor pe_img">',
        infoContentHeader: ["Hello World","涎涎","全栈工程师"],
        infoConfig: [
            {
                name: "民族/性别",
                content: "汉/男"
            },
            {
                name: "学历/专业",
                content: "本科/计算机信息管理"
            },
            {
                name: "电话/邮箱",
                content: "152****4216/511948469@qq.com"
            },
            {
                name: "博客地址",
                content: "简书 2016年至2020年",
                url: "https://www.jianshu.com/u/6aee7ae0e23a"
            },
            {
                url: "https://my.oschina.net/u/3222198",
                content: "OSCHINA 2021至今"
            },
            {
                name: "远程仓库 ",
                content: "国际版(非大陆地区)Github",
                url: "https://github.com/yanbo0039"
            },
            {
                content: "国内版(大陆地区)Gitee",
                url: "https://gitee.com/yanbo0039"
            },
            // {
            //     name: "性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别",
            //     content: "男"
            // },
            // {
            //     name: "民&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;族",
            //     content: "汉"
            // },
            // {
            //     name: "专&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;业 ",
            //     content: "计算机信息管理"
            // },
            // {
            //     name: "学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;历",
            //     content: "本科"
            // },
            // {
            //     name: "联系电话 ",
            //     content: "177****1969/152****4216"
            // },
            // {
            //     name: "个人邮箱 ",
            //     content: "511948469@qq.com"
            // },
        ],
        generateInfoCheadHtml: () => {
            return '<h2>'+ homeConfig.infoContentHeader[0] +'</h2>\n' +
                '<h1>'+ homeConfig.infoContentHeader[1] +'</h1>\n' +
                '<h6>'+ homeConfig.infoContentHeader[2] +'</h6>\n';
        },
        generateAddressHtml: () => {
            let addresshtml = '<ul class="address">',
                info = homeConfig.infoConfig;
            for (let i = 0; i < info.length; i++) {
                if(info[i].url){
                    if(info[i].name){
                        addresshtml +=
                            '<li>\n' +
                            '    <ul class="address-text">\n' +
                            '        <li><b>'+ info[i].name+'</b></li>\n' +
                            '        <li>\n' +
                            '            <a href="'+ info[i].url +'" target="_blank">'+ info[i].content +'</a>\n' +
                            '        </li>\n' +
                            '    </ul>\n' +
                            '</li>\n';
                    }else {
                        addresshtml +=
                            '<li>\n' +
                            '    <ul class="address-text">\n' +
                            '        <li></li>\n' +
                            '        <li>\n' +
                            '            <a href="'+ info[i].url +'" target="_blank">'+ info[i].content +'</a>\n' +
                            '        </li>\n' +
                            '    </ul>\n' +
                            '</li>\n';
                    }

                }else {
                    if(info[i].name){
                        addresshtml +=
                            '<li>\n' +
                            '    <ul class="address-text">\n' +
                            '        <li><b>'+ info[i].name+'</b></li>\n' +
                            '        <li>'+ info[i].content + '</li>\n' +
                            '    </ul>\n' +
                            '</li>\n';
                    }else {
                        addresshtml +=
                            '<li>\n' +
                            '    <ul class="address-text">\n' +
                            '        <li></li>\n' +
                            '        <li>'+ info[i].content + '</li>\n' +
                            '    </ul>\n' +
                            '</li>\n';
                    }
                }
            }
            addresshtml += '</ul>';
            return addresshtml;
        },
    };

    // 显示图片
    // $(".img_box").html(homeConfig.img);

    // 为内容赋值
    $(".info_box").html(homeConfig.generateInfoCheadHtml() + homeConfig.generateAddressHtml());
});