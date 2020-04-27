var a = document.getElementsByClassName('a');
var btn = document.getElementById('btn');
var num = location.href.slice(location.href.indexOf('=') + 1);
btn.onclick = function () {
    var b = {};
    for (i = 0; i < a.length; i++) {
        if(a[i].value != '' ){
            var c = a[i].name;
            var d = a[i].value;
            b[c] = d;
        }
    }
    b.a = 4;
    b.a_student_num = num;
    ajax({
        type: 'POST',
        url: 'http://localhost:',
        prot: 4010,
        data: b,
        success: function (result) {
            alert(result);
        },
        error: function (err) {
            console.log(err);
        }
    });
}
