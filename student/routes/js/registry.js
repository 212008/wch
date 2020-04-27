var a = document.getElementsByClassName('a');
var btn = document.getElementById('btn');

btn.onclick = function () {
    var b = {};
    for (i = 0; i < a.length; i++) {
        var c = a[i].name;
        var d = a[i].value;
        b[c] = d;
        console.log(a[i].value);
    }
    b.a = 2;
    console.log(b)
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