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
	$("#xinxi").mouseover(function(){
		$(this).css("background","#fff")
		$("#information").css("display","block").mouseover(function(){
			$("#information").css("display","block")
		})
	});
	$("#xinxi").mouseout(function(){
		$("#xinxi").css("background", "#f2f2f2");
		$("#information").css("display","none")
	})
	$("#information").mouseleave(function(){
		$("#xinxi").css("background", "#f2f2f2");
		$("#information").css("display","none")
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
				var height = $(window).scrollTop()+800;
				$("#main .louti").each(function() {
					if(height >= ($(this).offset().top + $(this).outerHeight())) {
						$("#loutiNav").css("display","block")
						var li = $("#loutiNav ul li").eq($(this).index());
						li.find("span").addClass("active");
						li.siblings().find("span").removeClass("active");
					}
					if (height<($("#main").offset().top)/2) {
						$("#loutiNav").css("display","none")
						$("#low ul li").eq(0).find("span").removeClass("active")
					}
				})
			} 	
		})
	
	var offset = $("#car").offset();  //结束的地方的元素
	$(".addcar").click(function(event){   //是$(".addcar")这个元素点击促发的 开始动画的位置就是这个元素的位置为起点
		var addcar = $(this);
		var img = addcar.parent().parent().find('img').attr('src');
		var flyer = $('<img class="u-flyer" src="'+img+'">');
		flyer.fly({
			start: {
				left: event.pageX-130,
				top: event.pageY-230
			},
			end: {
				left: offset.left,
				top: offset.top,
				width: 0,
				height: 0
			},
			onEnd: function(){
				$("#msg").show().animate({width: '250px'}, 200).fadeOut(1000);
			}
		});
	});

	
});