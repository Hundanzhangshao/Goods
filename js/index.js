;(function($){
	/*var homeIs = new iScroll("gd",{
		onBeforeScrollStart:function(e){
			var tar = e.target || e.srcElement,
				tag = tar.nodeName.toLowerCase()
			if(tag!="select" && tag!="input" && tag!="a" && tag!="button" && tag!="textarea")
				e.preventDefault();
		}  // 解除iscroll4的bug
	});*/
	//iscroll滑到底部自动返回到顶部
	var myScroll;
	function loaded(){
		myScroll = new iScroll('gd',{
			scrollY: true, 
			freeScroll: true
		});	
	}
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	document.addEventListener('DOMContentLoaded', loaded, false);

	//倒计时
	    function getRTime(){
	        var EndTime= new Date('2020/10/10 00:00:00'); //截止时间
	        var NowTime = new Date();
	        var t =EndTime.getTime() - NowTime.getTime();
	        var d=Math.floor(t/1000/60/60/24);
	        t-=d*(1000*60*60*24);
	        var h=Math.floor(t/1000/60/60);
	        t-=h*60*60*1000;
	        var m=Math.floor(t/1000/60);
	        t-=m*60*1000;
	        var s=Math.floor(t/1000);
	//        var d=Math.floor(t/1000/60/60/24);
	//        var h=Math.floor(t/1000/60/60%24);
	//        var m=Math.floor(t/1000/60%60);
	//        var s=Math.floor(t/1000%60);
	        function fnW(str){
	            var num;
	            str>9?num=str:num="0"+str;
	            return num;
	        }
	        if(d<0){
	        	clearInterval(timehome);
		        $(".t_d").html(0 + "天");
		        $(".t_h").html(0+"0" + ":");
		        $(".t_m").html(0+"0" + ":");
		        $(".t_s").html(0+"0"+ "");
		        $(".participation").css({"background":"rgb(212,208,208)","color":"#999"});
	        }else{
		        $(".t_d").html(d + "天");
		        $(".t_h").html(h + ":");
		        $(".t_m").html(fnW(m) + ":");
		        $(".t_s").html(fnW(s)+ "");
	        }
	    }
	    timehome = setInterval(getRTime,1000); 

	//返回顶部
	/*$(document).on("scroll",function(){
		var a = document.documentElement.scrollTop||document.body.scrollTop;
		if(a>=100){
			$(".rttt").fadeIn(500);
		}else{
			$(".rttt").fadeOut(500);
		};
		//点击返回顶部
		$(".rttt").on("click",function(){
			$('body').stop().animate({"scrollTop":0},500);
		});
	});*/


	//点击预订
	$(".participation").on("click",function(){
		window.location.href="spym.html";
	});

	$.each($(".ship dl"),function(){
		$(this).on("click",function(){
			window.location.href="spym.html";
		});
	});



	//底部导航
	$(".nav").eq(0).on("click",function(){
		window.location.href="index.html";
	});
	//底部导航
	$(".nav").eq(1).on("click",function(){
		window.location.href="page1.html";
	});
	//底部导航
	$(".nav").eq(2).on("click",function(){
		window.location.href="page2.html";
	});
	//底部导航
	$(".nav").eq(3).on("click",function(){
		window.location.href="page3.html";
	});




})(Zepto);