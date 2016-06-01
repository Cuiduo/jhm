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
	
	
	
	
	var names = $.cookie('names') ? $.cookie('names') : "{}";
	var nm=JSON.parse(names);
	for(i in nm){
		 	
			$("#username").val(nm[i].name);
			$("#password").val(nm[i].pasword);
	 }
//	$("#ljzc").click(function(){
//		location.href="index.html"
//	})
	
	
	
//	
	//储存用户名
	var usernames1=$("#username").val();
    var paswords1=$("#password").val();
    var names1 = $.cookie('names1') ? $.cookie('names1') : "{}";
    var nm1=JSON.parse(names1);
    nm1[usernames1]={
    	name:usernames1,
    	pasword:paswords1
    }
    $.cookie("names1",JSON.stringify(nm1),{expires:7,path:'/'});
    
    $("#ljzc").click(function(){
    	location.href="index.html"
    })
//	 if ($("#username").val()==$(nm[i].name)) {
//	 	for(i in nm){
//	//	 	$(nm[i].name).appendTo($("#dengru"));
//	//	 	$(nm[i].name).appendTo($("#zhuce"))
//			$("#username").html(nm[i].name);
//			$("#password").html(nm[i].pasword);
//	 	}
//	 	location.href="index.html"
//	 } else{
//	 	alert("请填写正确的用户名和密码")
//	 }
	 
	
});