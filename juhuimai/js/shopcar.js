;$(function(){
	
//	$(".delate").click(function(){
//		$(".goodsp1").hide();
//		$(".aaa").html(0)
//	})
	var carts =  $.cookie('carts') ? $.cookie('carts'):"{}";
			var goods = JSON.parse(carts);
			for (i in goods) {
				var tmp = '<div class="goodsp1">'+
						'<input type="checkbox" checked="checked" value="" />'+
						'<span>'+
							'<img src="'+'"/>'+
						'</span>'+
						
						'<span>'+
							'<input class="jian" type="button"  value="-" />'+
							'<input class="shul" type="text"  value="1" style="text-align: center;"/>'+
							'<input class="jia" type="button"  value="+" />'+
						'</span>'+
						'<span class="money">'+
						'</span>'+
						'<span class="allpay">'+
						'</span>'+
						'<span>'+
							'<input type="button" value="删除" class="delate"/>'+
						'</span>'+
					'</div>'
			$(
				'<div class="goodsp1">'+
						'<input type="checkbox" checked="checked" value="" />'+
						'<span>'+
							'<img src='+goods[i].img+'/>'+
						'</span>'+
						
						'<span>'+
							'<input class="jian" type="button"  value="-" />'+
							'<input class="shul" type="text"  value="1" style="text-align: center;"/>'+
							'<input class="jia" type="button"  value="+" />'+
						'</span>'+
						'<span class="money">'+68+
						'</span>'+
						'<span class="allpay">'+goods[i].price+
						'</span>'+
						'<span>'+
							'<input type="button" value="删除" class="delate"/>'+
						'</span>'+
					'</div>').appendTo($(".goodsp"))
			}
			$(".delate").click(function() {
				$.cookie("carts", "", {expires: -1, path: '/'});
				$(".goodsp1").hide();
				$(".aaa").html(0)
			});
//			$()
			//$("<div>品名：<span><img style='margin-left: 100px;' src="+goods[i].img+"/><span>,价格："+goods[i].price + "</span>" + "<span>,数量:"+goods[i].num+"</span></div>").appendTo($('.goodsp'));
//			}	
	
	var num=parseFloat($(".shul").val());
	$(".jia").click(function(){
		
		num+=1;
		$(".allpay").html(68*num)
		$(".shul").val(num)
		$(".aaa").html(parseFloat($(".allpay").html()))
		
	});
	$(".jian").click(function(){
		$(".allpay").html(68*num)
		$(".aaa").html(parseFloat($(".allpay").html()))
		num-=1;
		
		$(".shul").val(num)
		if (num==0) {
			$(".shul").val(1)
			$(".allpay").html(68)
			$(".aaa").html(68)
		}	
		
	});	
	$(".jxshpo").click(function(){
		location.href="index.html"
	})
});