;$(function(){
	var num=parseFloat($(".shul").val());
	$(".jia").click(function(){
		
		num+=1;
		$(".allpay").html(parseFloat($(".allpay").html())*num)
		$(".shul").val(num)
		$(".aaa").html(parseFloat($(".allpay").html()))
		
	});
	$(".jian").click(function(){
		$(".allpay").html(79*num)
		$(".aaa").html(parseFloat($(".allpay").html()))
		num-=1;
		
		$(".shul").val(num)
		if (num==0) {
			$(".shul").val(1)
			$(".allpay").html(79)
			$(".aaa").html(79)
		}	
		
	});	
	$(".jxshpo").click(function(){
		location.href="index.html"
	})
//	$(".delate").click(function(){
//		$(".goodsp1").hide()
//	})
});