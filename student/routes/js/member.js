window.onload = function () {
    ajax({
        type: 'POST',
        url: 'http://localhost:',
        prot: 4010,
        data: {
            a: 5,
        },
        success: function (result) {
            var a = JSON.parse(result);
            var vm = new Vue({
                el: '.inner',
                data: {
                    arr: a,
                },
                methods: {
                    a: function (a) {
                        location.href = 'student_modify.html?num=' + a;
                    },
                    b: function (a) {
                        var ist = confirm('请确认删除');
                        if(ist){
                            ajax({
                                type: 'POST',
                                url: 'http://localhost:',
                                prot: 4010,
                                data: {
                                    a: 6,
                                    a_student_num: a,
                                },
                                success: function (result) {
                                    alert(result);
                                },
                                error: function (err) {
                                    console.log(err);
                                }
                            });
                        }
                    },
                    btn:function(a){
                        location.href = 'index.html?num=' + a;
                    }
                }
            });
        },
        error: function (err) {
            console.log(err);
        }
    });
}