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
		$(".feiji").css("background","url(../images/banner/icohover.png) no-repeat");
		$(".goodfl").css("display","block")
	});
	$(".allgoods-a").mouseout(function(){
		$(this).css("background","rgba(255, 255, 255, 0.8)");
		$(".feiji").css("background","url(../images/banner/ico.png) no-repeat");
		$(".goodfl").css("display","none")
	});
	$(".allgoods-b").mouseover(function(){
		$(this).css("background","#E31939");
		$(".feiji1").css("background","url(../images/banner/icohover.png) no-repeat left -25px");
		$(".goodfl2").css("display","block")
	});
	$(".allgoods-b").mouseout(function(){
		$(this).css("background","rgba(255, 255, 255, 0.8)");
		$(".feiji1").css("background","url(../images/banner/ico.png) no-repeat left -25px");
		$(".goodfl2").css("display","none")
	});
	$(".allgoods-c").mouseover(function(){
		$(this).css("background","#E31939");
		$(".feiji2").css("background","url(../images/banner/icohover.png) no-repeat left -50px")
	});
	$(".allgoods-c").mouseout(function(){
		$(this).css("background","rgba(255, 255, 255, 0.8)");
		$(".feiji2").css("background","url(../images/banner/ico.png) no-repeat left -50px")
	});
	$(".allgoods-d").mouseover(function(){
		$(this).css("background","#E31939");
		$(".feiji3").css("background","url(../images/banner/icohover.png) no-repeat left -72px")
	});
	$(".allgoods-d").mouseout(function(){
		$(this).css("background","rgba(255, 255, 255, 0.8)");
		$(".feiji3").css("background","url(../images/banner/ico.png) no-repeat left -72px")
	});
	$(".allgoods-e").mouseover(function(){
		$(this).css("background","#E31939");
		$(".feiji4").css("background","url(../images/banner/icohover.png) no-repeat left -95px")
	});
	$(".allgoods-e").mouseout(function(){
		$(this).css("background","rgba(255, 255, 255, 0.8)");
		$(".feiji4").css("background","url(../images/banner/ico.png) no-repeat left -95px")
	});
	$(".allgoods-f").mouseover(function(){
		$(this).css("background","#E31939");
		$(".feiji5").css("background","url(../images/banner/icohover.png) no-repeat left -118px")
	});
	$(".allgoods-f").mouseout(function(){
		$(this).css("background","rgba(255, 255, 255, 0.8)");
		$(".feiji5").css("background","url(../images/banner/ico.png) no-repeat left -118px")
	});
	$(".allgoods-g").mouseover(function(){
		$(this).css("background","#E31939");
		$(".feiji6").css("background","url(../images/banner/icohover.png) no-repeat left -143px")
	});
	$(".allgoods-g").mouseout(function(){
		$(this).css("background","rgba(255, 255, 255, 0.8)");
		$(".feiji6").css("background","url(../images/banner/ico.png) no-repeat left -143px")
	});


	//beer  js效果
	
	var uli=$("#titlebox ul li")
	var ulogo=$(".logobox")
	ulogo.addClass("hide");
	ulogo.eq(0).addClass("show");
	uli.mouseover(function(){
		var index=$(this).index();
		ulogo.removeClass("show").addClass("hide");
		ulogo.eq(index).addClass("show")
	});
	$(".beerfix li").mouseover(function(){
		$(this).animate({"left":"-50px"},300,function(){
			$(this).animate({"left":"0"},300)
		})
	})
	//HOISTRY
	$("#tabc ul li").mouseover(function(){
		$(this).animate({"top":"-10px"},300,function(){
			$(this).animate({"top":"0"},300)
		})
	})
	
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