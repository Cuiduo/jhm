;$(function(){
	$("#city").mouseover(function(){
		$("#city-box").css("display","block").mouseover(function(){
			$("#city-box").css("display","block")
		})
	});
	$("#city-box").mouseleave(function(){
		$("#city-box").css("display","none")
	});
	$("#city").mouseout(function(){
		$("#city-box").css("display","none")
	});
	//top二级菜单导航
	mouse("xinxi","information");
	mouse("shoucang","shoucang-1");
	mouse("phone","phone-a");
	mouse("shangjia","shangjia-a");
	mouse("daohang","daohang-a");
	function mouse(target1,target2){
		$("#"+target1).mouseover(function(){
			$(this).css("background","#fff")
			$("#"+target2).css("display","block").mouseover(function(){
				$("#"+target2).css("display","block")
			})
		});
		$("#"+target1).mouseout(function(){
			$("#"+target1).css("background", "#f2f2f2");
			$("#"+target2).css("display","none")
		})
		$("#"+target2).mouseleave(function(){
			$("#"+target1).css("background", "#f2f2f2");
			$("#"+target2).css("display","none")
		})
	};
	//banner二级菜单导航
	$(".allgoods-a").mouseover(function(){
		$(this).css("background","#E31939");
		$(".feiji").css("background","url(../images/banner/icohover.png) no-repeat")
	});
	$(".allgoods-a").mouseout(function(){
		$(this).css("background","rgba(255, 255, 255, 0.8)");
		$(".feiji").css("background","url(../images/banner/ico.png) no-repeat")
	});
	easy("allgoods-b","feiji1","-25px");
	easy("allgoods-c","feiji2","-50px");
	easy("allgoods-d","feiji3");
	easy("allgoods-e","feiji4");
	easy("allgoods-f","feiji5");
	easy("allgoods-g","feiji6");
	function easy(target1,target3,target2){
		$("."+target1).mouseover(function(){
			$(this).css("background","#E31939");
			$("."+target3).css("background","url(../images/banner/icohover.png) no-repeat left target2")
		});
		$("."+target1).mouseout(function(){
			$(this).css("background","rgba(255, 255, 255, 0.8)");
			$("."+target3).css("background","url(../images/banner/ico.png) no-repeat left target2")
		});
	}
	//beer  js效果
//	$("#titlebox ul li").mouseover(function(){
//		$(this).each()
//	})
	//楼梯效果js
	var isclick = false;
	$("#loutiNav ul li:not(:last)").click(function() {
		isclick = true;
		$(this).find("span").addClass("active").parent().siblings().find("span").removeClass("active");
		var _top = $(".louti").eq($(this).index()).offset().top;
		$("html, body").stop().animate({scrollTop: _top}, 500, function() {
			isclick = false;
		});
	});
	$("#loutiNav ul li.last").click(function() { 	
		$("html, body").animate({scrollTop: 0}, 1000); 
	})
	$(window).scroll(function() {
			if(!isclick){
				var height = $(window).scrollTop();
				$("#main .louti").each(function() {
					if(height >= ($(this).offset().top - $(this).outerHeight()/3)) {
						$("#loutiNav").fadeIn(600)
						var li = $("#loutiNav ul li").eq($(this).index());
						li.find("span").addClass("active");
						li.siblings().find("span").removeClass("active");
					}
					if (height<$("#main").offset().top*2) {
						$("#loutiNav").fadeOut(500)
						$("#low ul li").eq(0).find("span").removeClass("active")
					}
				})
			} 	
		})
	$(".floorbt .spanr").click(function(){
		
		$(".floorbt ul").animate({left:'-1200px'},1500)
	})
	$(".floorbt .spanl").click(function(){
		$(".floorbt ul").animate({left:"0"},500)
	})
});