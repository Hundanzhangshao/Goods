;(function($){
	var homeIs = new iScroll("gd",{
		onBeforeScrollStart:function(e){
			var tar = e.target || e.srcElement,
				tag = tar.nodeName.toLowerCase()
			if(tag!="select" && tag!="input" && tag!="a" && tag!="button" && tag!="textarea")
				e.preventDefault();
		}  // 解除iscroll4的bug
	});
	//iscroll滑到底部自动返回到顶部
	/*var myScroll;
	function loaded(){
		myScroll = new iScroll('gd',{
			scrollY: true, 
			freeScroll: true
		});	
	}
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	document.addEventListener('DOMContentLoaded', loaded, false);*/

	//订单点击（送货方式）
	$.each($(".bq div"),function(){
		$(this).on("click",function(){
			$(this).css({"border-color":"green","color":"green"}).siblings().css({"border-color":"#000","color":"#000"});
		})
	})


})(Zepto);