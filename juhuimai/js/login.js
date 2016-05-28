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

	// function mouseover(data1,data2){
	// 	$(data1).mouseover(function(){
	// 		$("data2").css({"display","block"})
	// 	})
	// }
	// function mouseleave(function(data1,data2){
	// 	$(data1).mouseleave(function(){
	// 		$("data2").css({"display","none"})
	// 	})
	// })
});