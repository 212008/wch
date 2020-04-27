var a = location.href.slice(location.href.indexOf('=') + 1);
        ajax({
            type: 'POST',
            url: 'http://localhost:',
            prot: 4010,
            data: {
                a: 3,
                a_student_num: a,
            },
            success: function (result) {
                var a = JSON.parse(result);
                var main = document.getElementById("cnv");
                var myechart = echarts.init(main);
                var option = {
                    title: { text: "成绩" },
                    xAxis: { data: ["HTML5", "css3", "JavaScript", "AJAX", "jQuery"] },
                    yAxis: {},
                    series: [{ type: "bar", data: [a[0].b_html, a[0].b_css, a[0].b_javascript, a[0].b_ajax, a[0].b_jquery] }],
                }
                //将配置项添加echarts对象中
                myechart.setOption(option);
                console.log(a)
            },
            error: function (err) {
                console.log(err);
            }
        })