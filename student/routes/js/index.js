var a = location.href.slice(location.href.indexOf('=') + 1);
ajax({
    type: 'POST',
    url: 'http://localhost:',
    prot: 4010,
    data: {
        a: 1,
        a_student_num: a,
    },
    success: function (result) {
        var a = JSON.parse(result);
        var vm = new Vue({
            el: '.table',
            data: {
                arr: a[0],
            },
            methods: {}
        });
    },
    error: function (err) {
        console.log(err);
    }
});