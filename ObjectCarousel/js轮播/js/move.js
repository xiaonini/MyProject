/**
 * Created by Administrator on 2016/2/28.
 */
function starMove1(obj,attr,target,iSpeed){

    var timer = null;

    timer=setInterval(function(){

        var iL = parseInt(getStyle(obj,attr));//dom获取当前浏览器窗口的宽高(需要导入dom节点的js)

        obj.style[attr] = iL + iSpeed + "px";

        if(iL + iSpeed  >= target){
            clearInterval(timer);
        }

    },50)

}

/*缓冲运动封装=>变速运动*/
function starMove2(obj,attr,target,num) {

    var timer = null;

    timer = setInterval(function () {

        var iL = parseInt(getStyle(obj, attr));
        // var iSpeed = Math.ceil((target - iL)/num);//用目标值减去当前值，num的值一般5-10，num值越小缓冲运动越快；
        var iSpeed = iSpeed > 0 ? Math.ceil((target - iL) / num) : Math.floor((target - iL) / num);
        //判断值为证或者负，为正则向上取整1，为负向下取整为-1

        console.log(target - iL);
        console.log(iSpeed);
        obj.style[attr] = iL + iSpeed + "px";
        console.log(iL + iSpeed);
        if (iL + iSpeed == target) {
            clearInterval(timer);
        }

    }, 50)
}

function starMove3 (obj,json,fn){
    clearInterval(obj.timer)//清楚正在执行的定时器
    var iSpeed  = 0;
    obj.timer = setInterval(function(){
        var i = 0;
        var attrLength = 0;
        var bOver = true; //假设运动完成
        for (var attr in json){
            var iCur = 0;
            if(attr == "opacity"){//透明度
                iCur = Math.round(parseFloat(getStyle(obj,"opacity"))*100);
            }else{
                iCur = parseInt(getStyle(obj,attr));
            }

            iSpeed = (json[attr] - iCur)/5;//获取相对速度
            iSpeed = iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);//上下取整

            if(iCur != json[attr]){
                bOver = false; //如果某一个属性没有完成运动，关闭按钮
                if(attr == "opacity"){
                    obj.style.filter ='alpha(opacity:'+iCur + iSpeed+')';
                    obj.style.opacity =(iCur + iSpeed)/100;
                }else{
                    obj.style[attr] =iCur + iSpeed +"px";
                }

            }

        }
        //console.log(bOver)
        if(bOver){//运动完成

            clearInterval(obj.timer);
            fn && fn()//如果有回调方法，就调用

        }



    },30)

}

function getId (str){
    return document.getElementById(str);
};

function getStyle(obj,attr){//获取css样式
    if(obj.currentStyle){//ie
        return obj.currentStyle[attr];
    }
    else{
        return getComputedStyle(obj,false)[attr];
    }
}