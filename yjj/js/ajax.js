//url  路径
//callback  回调函数
//data  路径上的参数
function ajaxGet(url,callback,data){
	if( arguments.length == 3 ){
		url = url + "?" + data;
	}
	var ajax = null;
	if( window.XMLHttpRequest ){
		ajax = new XMLHttpRequest();
	}else{
		ajax = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	ajax.open("get",url);
	//在url后参数默认为true为异步，改为false就为同步
	ajax.send();
	
	ajax.onreadystatechange = function(){
		if( ajax.readyState == 4 && ajax.status == 200 ){
			if( callback ){
				callback(ajax.responseText);//通过回调函数  将服务器返回的结果传回
			}
		}
	}
}
