//原生Ajax
function oriAjax(url,){
    //判断浏览器版本
    if(window.XMLHttpRequest){
        var ajaxRequest=new XMLHttpRequest();
    }else{
        var ajaxRequest=new ActiveXObject("Microsoft.XMLHTTP");
    }

    ajaxRequest.open("GET",url,true);

    ajaxRequest.onreadystatechange=function(){
        if(ajaxRequest.readyState==4 && ajaxRequest.status==200){
            //更新dom结点
            document.getElementById("myDiv").innerHTML=ajaxRequest.responseText;
        }else{
            console.log(ajaxRequest.response);
        }
    }
}