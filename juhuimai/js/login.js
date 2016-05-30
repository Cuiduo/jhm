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

	
});