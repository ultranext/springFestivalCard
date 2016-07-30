// JavaScript Document
function $(str){
	return document.querySelector(str);
	}
	//添加触摸事件监听音乐播放
	$("#media").addEventListener("ended",function(){
		if($("#disc").style.animationPlayState!=undefined){
			$("#disc").style.animationPlayState="running";
		}else{
			$("#disc").setAttribute("class","");
		}

	},false);
$("#music").addEventListener("touchstart",function(){
	if($("#media").paused){
		$("#media").play();
		//$(".play").style.animationPlayState="running";
		if($("#disc").style.animationPlayState!=undefined){
			$("#disc").style.animationPlayState="running";
		}else{
			$("#disc").setAttribute("class","play");
		}
		}
	else{$("#media").pause();if($(".play").style.animationPlayState!=undefined){
			$("#disc").style.animationPlayState="paused";
		}else{
			$("#disc").setAttribute("class","");
		}
	}},false);
	$("#media").addEventListener("ended",function(){
		$("#media").pause();$(".play").style.animationPlayState="paused";
		},false)
	//添加触摸事件控制音乐淡入淡出
	$("#page1").addEventListener("touchstart",function(){
		$("#page1").style.display="none";
		$("#page2").style.display="block";
		var timer=setInterval(function(){
			$("#page2").classList.add("fadeout");
			$("#page3").classList.add("fadein");
		$("#page3").style.display="block";},5500);
		
		},false)

		document.addEventListener("touchmove",function(event){console.log(event.touches[0].screenX);console.log(event.target.screenY);},false)