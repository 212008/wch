function createCode(length){
    //声明空字符串,用来装随机出来的字母和数字
    var code = '';
    //声明变量,装验证码所需的长度
    var codeLength = length
    // console.log(length);
    //获取验证码显示区域
    var msg = document.getElementById('msg');
    //声明数组,放验证码所需的候选字符
    var arr = [1,2,3,4,5,6,7,8,9,0,
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    //设置循环
    for(var i = 0;i < codeLength;i++){
        //随机获取下标值,取整
        var charNum = Math.floor(Math.random() * 62);
        //字符串拼接,随机获取下标值对应的字符
        code += arr[charNum]
    }
   msg.innerHTML = code;
}

//页面重新加载时,生成随机验证码
window.onload = function () {
    createCode(4);
};
// uname的所有操作
function show_uname(){
    uname_msg.innerHTML="用户名6~12位";
}
function check_uname(){
    var $uname=uname.value;
    if(!$uname){
        uname_msg.innerHTML="用户名不能为空";
    }else if($uname.length>12 || $uname.length<6){
        uname_msg.innerHTML="用户名格式不正确";
    }else{
        uname_msg.innerHTML="";
    }
}
// 密码框的所有操作
function show_upwd(){
    upwd_msg.innerHTML="密码8~12位";
}
function check_upwd(){
    var $upwd=upwd.value;
    if(!$upwd){
        upwd_msg.innerHTML="密码不能为空";
    }else if($upwd.length>12 || $upwd.length<8){
        upwd_msg.innerHTML="密码格式不正确";
    }else{
        upwd_msg.innerHTML="";
    }
}
//cpwd的验证
function show_cpwd(){
    cpwd_msg.innerHTML="请再输入一遍密码";
}
function check_cpwd(){
    var $cpwd=cpwd.value;
    var $upwd=upwd.value;
    if(!$cpwd){
        cpwd_msg.innerHTML="密码不能为空";
    }else if($upwd==$cpwd){
        cpwd_msg.innerHTML="";
    }else{
            cpwd_msg.innerHTML="密码格式不正确";
    }
}
// 验证码的验证
function check_code(){
    var $ucode=ucode.value;
    var code = msg.innerHTML;
    if(!$ucode){
        code_msg.innerHTML="验证码不能为空";
    }else if($ucode.toUpperCase()==code.toUpperCase()){
        code_msg.innerHTML="";
    }else{
        code_msg.innerHTML="验证码不正确";
    }
}
//验证
function login(){
    //获取三处的验证
    var code = msg.innerHTML;
    var c1=uname_msg.innerHTML;
    var c2=upwd_msg.innerHTML;
    var c3=code_msg.innerHTML;
    //判断状态
    if(c1=="" && c2=="" && c3==""){
        location.href='index.html';
    }else{
        alert("用户名或密码不正确");
    }
}