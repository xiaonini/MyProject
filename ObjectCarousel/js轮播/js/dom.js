/**
 * Created by hasee on 2016/8/16.
 */
function setId(str) {//获取节点ID
    return document.getElementById(str);
};

function setNode(str) {//创建新节点
    return document.createElement(str);
};

function setName(){//获取相同名称的节点，一般用于获取input
	return document.getElementsByName(str);
}


function setTagName(){//获取相同元素的节点
	return document.getElementsByTagName(str);
}


function getStyle(obj,attr) {//获取当前浏览器窗口的宽高
    //获取谁的属性：obj
    //获取什么属性:attr
    //判断浏览器是否支持getComputedStyle属性
    if(window.getComputedStyle){
        return  window.getComputedStyle(obj,null)[attr];
    }else {
        //ie低版本的方法
        return  obj.currentStyle[attr];
    }

}

