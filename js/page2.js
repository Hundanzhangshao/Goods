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

	//商品购物车加减
	$.each($(".a"),function(){
		$(this).on("click",function(){
			var i=Number($(this).siblings(".v").html());
			i++;
			if(i>=5){
				i=5;
			}
			$(this).siblings(".v").html(i);
		})
	});
	$.each($(".e"),function(){
		$(this).on("click",function(){
			var i=Number($(this).siblings(".v").html());
			i--
			if(i<=0){
				i=0;
			}
			$(this).siblings(".v").html(i);
		})
	});

	//全选、全不选
	$("#c1").on("click",function(){
    	if(this.checked){
    		$(".list").prop("checked",true);
    	}else{
    		$(".list").prop("checked",false);
    	}
	});

	//删除
	$(".header span").on("click",function(){
		$.each($(".list"),function(){
			if($(this).prop("checked")){
				$(this).parent().parent().remove();
			}
		});
		$("#c1").prop("checked",false);
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