var nav = document.getElementById('nav').getElementsByTagName('a');
var ime = document.getElementsByTagName('iframe');
// document.getElementById('ife').innerHTML=

var a = location.href.slice(location.href.indexOf('=') + 1);
document.getElementById('gg').innerHTML = '欢迎您:用户 ' + a;
for (i = 0; i < nav.length; i++) {
    nav[i].setAttribute('nav', i);
    nav[i].onclick = function () {
        for (j = 0; j < nav.length; j++) {
            nav[j].style.marginLeft = 80 + 'px';
            nav[j].style.borderRadius = 3 + 'px';
            nav[j].style.transition = 0.5 + 's';
        }
        this.style.marginLeft = 121 + 'px';
        this.style.borderRadius = 0 + 'px';
        this.style.transition = 0.5 + 's';
        if (this.getAttribute('nav') == 0) {
            ime[0].src = 'inner_home.html?a=' + a;
        } else if (this.getAttribute('nav') == 1) {
            ime[0].src = 'index.html?a=' + a;
        } else if (this.getAttribute('nav') == 2) {
            ime[0].src = 'student_modify.html?a=' + a;
        } else if (this.getAttribute('nav') == 3) {
            ime[0].src = 'student_grade.html?a=' + a;
        }
    }
}