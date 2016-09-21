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

	//返回首页
	$(".back").on("click",function(){
		window.location.href="index.html";
	});

	//详情页
	$(".cont").on("click",function(){
		window.location.href="spym.html";
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