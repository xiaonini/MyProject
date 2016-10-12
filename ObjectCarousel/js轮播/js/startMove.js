function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr] == "auto" ? 0 : obj.currentStyle[attr];
	}
	else{
		return window.getComputedStyle(obj,null)[attr] == "auto" ? 0 : window.getComputedStyle(obj,null)[attr];
	}
}

function startMove(obj,attrJSON,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var i = 0;
		var attrLength = 0;
		for(var attr in attrJSON){
			if(attr == "opacity"){
				var cur = parseInt(getStyle(obj,attr)*100);
			}
			else{
				var cur = parseInt(getStyle(obj,attr));
			}
			var speed = (attrJSON[attr] - cur) / 8;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if(cur == attrJSON[attr]){
				i++;
			}
			else{
				if(attr == "opacity"){
					obj.style.filter = "alpha(opacity:"+(cur + speed)+")";
					obj.style.opacity = (cur + speed) / 100;
				}
				else{
					obj.style[attr] = cur + speed + "px";
				}
			}
			attrLength++;
		}
		if(i == attrLength){
			clearInterval(obj.timer);
			if(callback){
				callback();
			}
		}
	},20);
}