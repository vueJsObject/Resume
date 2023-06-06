$(function (){
    //为其它技能赋值 level 值请传入 0/1/2/3 四种值

    let skillObj = {
        skillsCore_left_html: '',
        skillsCore_right_html: '',
        skillsOther_left_html: '',
        skillsOther_right_html: '',
        levelTextArray: ["了解","熟悉","熟练","精通"],
        levelPointArray: ["25%","50%","75%","100%"],
        skillsCore_left: [
            {
                name: "Html / Css / JavaScript",
                level: 2
            },
            {
                name: "Java基础/高级",
                level: 2
            },
            {
                name: "Oracle / MySql",
                level: 1
            },
        ],
        skillsCore_right: [
            {
                name: "Bootstrap / Vue",
                level: 2
            },
            {
                name: "Svn / Git",
                level: 2
            },
            {
                name: "SpringBoot / SpringCloud",
                level: 1
            },
        ],
        skillOther_left: [
            {
                name:"ES6+",
                level:1
            },
            {
                name:"Spring / SpringMVC / Mybatis",
                level:1
            },
            {
                name:"Linux",
                level:0
            },
            {
                name:"Redis / MongoDB",
                level:0
            },
        ],
        skillOther_right: [
            {
                name: "Java8 +",
                level: 1
            }
        ],
        generateProgressHtml: (nameText, levelText, levelPoint) => {
            return '<h6>' + nameText + '<span> ' + levelText + ' </span></h6>\n' +
                '<div class="progress">\n' +
                '    <div class="progress-bar progress-bar-striped active" style="width: ' + levelPoint + '">\n' +
                '    </div>\n' +
                '</div>\n';
        }
    };

    if(skillObj.skillsCore_left.length > 0){
        for (let i = 0; i < skillObj.skillsCore_left.length; i++) {
            let nameText = skillObj.skillsCore_left[i].name;
            let levelText = skillObj.levelTextArray[skillObj.skillsCore_left[i].level];
            let levelPoint = skillObj.levelPointArray[skillObj.skillsCore_left[i].level];
            let progressHtml = skillObj.generateProgressHtml(nameText, levelText, levelPoint);

            skillObj.skillsCore_left_html += progressHtml;
        }
    }
    if(skillObj.skillsCore_right.length > 0){
        for (let i = 0; i < skillObj.skillsCore_right.length; i++) {
            let nameText = skillObj.skillsCore_right[i].name;
            let levelText = skillObj.levelTextArray[skillObj.skillsCore_right[i].level];
            let levelPoint = skillObj.levelPointArray[skillObj.skillsCore_right[i].level];
            let progressHtml = skillObj.generateProgressHtml(nameText, levelText, levelPoint);

            skillObj.skillsCore_right_html += progressHtml;
        }
    }
    if(skillObj.skillOther_left.length > 0){
        for (let i = 0; i < skillObj.skillOther_left.length; i++) {
            let nameText = skillObj.skillOther_left[i].name;
            let levelText = skillObj.levelTextArray[skillObj.skillOther_left[i].level];
            let levelPoint = skillObj.levelPointArray[skillObj.skillOther_left[i].level];
            let progressHtml = skillObj.generateProgressHtml(nameText, levelText, levelPoint);

            skillObj.skillsOther_left_html += progressHtml;
        }
    }
    if(skillObj.skillOther_right.length > 0){
        for (let i = 0; i < skillObj.skillOther_right.length; i++) {
            let nameText = skillObj.skillOther_right[i].name;
            let levelText = skillObj.levelTextArray[skillObj.skillOther_right[i].level];
            let levelPoint = skillObj.levelPointArray[skillObj.skillOther_right[i].level];
            let progressHtml = skillObj.generateProgressHtml(nameText, levelText, levelPoint);

            skillObj.skillsOther_right_html += progressHtml;
        }
    }

    //为核心技能赋值
    $(".skillsCore_left").html(skillObj.skillsCore_left_html);
    $(".skillsCore_right").html(skillObj.skillsCore_right_html);

    // 为其它技能赋值
    $(".skillsOther_left").html(skillObj.skillsOther_left_html);
    $(".skillsOther_right").html(skillObj.skillsOther_right_html);
});