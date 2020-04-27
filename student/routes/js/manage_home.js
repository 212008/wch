var nav = document.getElementById('nav').getElementsByTagName('a');
        var ime = document.getElementsByTagName('iframe');
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
                if(this.getAttribute('nav') == 0){
                    ime[0].src = 'inner_home.html?a=1';
                }else if(this.getAttribute('nav') == 1){
                    ime[0].src = 'member.html?a=1';
                }else if(this.getAttribute('nav') == 2){
                    // ime[0].src = 'student_modify.html?a=1';
                }else if(this.getAttribute('nav') == 3){
                    // ime[0].src = '';
                }
            }
        }