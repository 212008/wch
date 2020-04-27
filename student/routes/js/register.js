var btn = document.getElementById('btn');
var btn1 = document.getElementById('btn1');
btn1.onclick = function(){
    location.href = 'registry.html'
}
btn.onclick = function () {
    var a_student_num = document.getElementById('a_student_num').value;
    var pwd = document.getElementById('pwd').value;
    if (pwd == '123456') {
        ajax({
            type: 'POST',
            url: 'http://localhost:',
            prot: 4010,
            data: {
                a: 0,
                a_student_num: a_student_num,
            },
            success: function (result) {
                console.log(result)
                var a = JSON.parse(result);
                if (a) {
                    location.href = 'student_home.html?num=' + a[0].a_student_num;
                } else {
                    alert('用户名或密码错误')
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
        pwd = '';
        a_student_num = '';
    } else {
        alert('用户名或密码错误');
    }
}
