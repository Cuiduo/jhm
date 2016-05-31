//;$(function(){
	//点击按钮加减商品
	var num=parseInt($(".shul").val());
	$(".sl .jia").click(function(){
		
		num+=1;
			
		$(".shul").val(num)
		
	});
	$(".sl .jian").click(function(){
		
		num-=1;
		
		$(".shul").val(num)
		if (num==0) {
			$(".shul").val(1)
		}	
	});
	$(".jrgwc").click(function(){
		var sum = $(".shul").val();
		
	})
	$(".jrgwc").click(function(){
		location.href="shopcar.html"
	})
	
	
	//吸顶菜单效果
	var goodRttop = $(".goodRt ul").offset().top;
		$(window).scroll(function(){
			var scrollTop = $(window).scrollTop();
			if(scrollTop >= goodRttop ){
				$(".goodRt ul").css({position: "fixed", top: "0","background":"#fff"});
			}else{
				$(".goodRt ul").css({position:"static"});
			}
		})
//	var index=0;
//		show();
//		function show(){
//			$(".gunDong ul li").eq(index)
//		}
//		setInterval("change()",1000);
//		
//		function change(){
//			index++;
//			var top=150;
//			if (index==$(".gunDong ul li").size()) {
//				index=0;
//			}
//			$(".gunDong ul li").eq(index).animate({"top":-top},500);
//		}
//		$(".gotop").click(function(){
//			$("html, body").animate({scrollTop: 0}, 1000);
//		})
//});