/**
 * Created by Administrator on 2016/8/25.
 */
var boxNode=document.getElementById("box");
var inputNode=boxNode.getElementsByTagName("input")[0];
var ulNode=boxNode.getElementsByTagName("ul")[0];

function trim(str){
    return str.replace(/(^\s*)|(\s$)/g,"");
}

inputNode.onkeydown=function(e){
    var event=e|| window.event;
    var keyCode=event.which|| event.keyCode;
    //alert(keyCode);//得到回车键是13，空格键是32
    if(keyCode==32 ||keyCode==13){
        var newLi=document.createElement("li");//创建li
        var inputNodeVal=trim(inputNode.value);//得到Input的值，去除了左右两端的空格
        var lisNode=ulNode.getElementsByTagName("li");

        if(inputNodeVal==""){
            return alert("请输入非空内容！");
        }

        if(inputNodeVal.length<5){
            return alert("文本太短，不够真诚！");
        }

        if(inputNodeVal.length>12){
            return alert("文本超出规定长度！");
        }

        for(var i=0; i<lisNode.length;i++){
            var spanHtml=lisNode[i].getElementsByTagName("span")[0];
            if(inputNodeVal==spanHtml){
                return alert("请勿输入重复内容！");
            }
        }

        newLi.innerHTML="<span>"+inputNodeVal+"</span><i>×</i>";//将Input的值给li
        ulNode.appendChild(newLi);
        inputNode.value="";


    }


}

ulNode.onclick=function(e){
    var event=e|| window.event;
    var target=event.srcElement|| event.target;
    if(target.tagName.toLowerCase()=="i"){
        target.parentNode.parentNode.removeChild(target.parentNode);
    }
}

inputNode.onfocus=function(){
    var val=trim(this.value);
    if(val=="添加标签，用空格或回车确认"){
        this.value="";
        this.style.color="#000";
    }
}

inputNode.onblur=function(){
    var val=trim(this.value);
    if(val==""){
        this.value="添加标签，用空格或回车确认";
        this.style.color="#d8d8d8";
    }
}