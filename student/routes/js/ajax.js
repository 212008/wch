function ajax(ajaxObj) {
    //创建对象
    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest();
    } else {
        var xhr = new ActiveXObject('Mirosoft.XMLHTTP');
    }
    //判断传输方法
    if (ajaxObj.type == 'POST') {
        xhr.open(ajaxObj.type, ajaxObj.url + ajaxObj.prot, true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;charset=utf-8');
        xhr.send(jsonToStr(ajaxObj.data));
    } else if (ajaxObj.type == 'GET') {
        xhr.open(ajaxObj.type, ajaxObj.url + ajaxObj.prot + '?' + jsonToStr(ajaxObj.data), true);
        xhr.send();
    }
    //事件监听
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                if (ajaxObj.success) {
                    ajaxObj.success(xhr.responseText);
                }
            } else {
                xhr.onerror(function (err) {
                    if (ajaxObj.error) {
                        ajaxObj.error(xhr.responseText);
                    }
                })
            }
        }
    }
}
// 对象转为字符串
function jsonToStr(dataJson) {
    var arr = [];
    for (var i in dataJson) {
        arr.push(i + '=' + dataJson[i]);
    }
    return arr.join('&');
}