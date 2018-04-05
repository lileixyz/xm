window.onload = function () {
    init();
}

function  $(id) {
    return document.getElementById(id);
}

function ajaxPost(url,callback,data){
    var ajax = new XMLHttpRequest();
    ajax.open("POST",url);
    ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    if(data ){
        ajax.send(data);
    }else{
        ajax.send();
    }
    ajax.onreadystatechange = function(){
        if( ajax.readyState == 4 && ajax.status == 200 ){
            if( callback ){
                callback(ajax.responseText);
            }
        }
    }
}

function init() {
    var uname = $("uname");
    var upwd = $("upwd");
    var ubtn = $("btn");
    var s = $("s");
    //var ms = $("ms");
    ubtn.onclick = function () {
            var data = "username=" + uname.value + "&password=" + upwd.value
            ajaxPost("http://plumsir.java.cdnjsp.wang/jojo/user/login", function (msg) {
                console.log(msg);
                var amsg = JSON.parse(msg);
                if (amsg.state == "1") {
                    s.innerHTML = "登陆成功";
                } else {
                    s.innerHTML = amsg.message;
                }
                ;
            }, data);
        }
    }