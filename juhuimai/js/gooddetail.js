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
	$(".ljgm").click(function(){
		location.href = "shopcar.html";
		
	})
	$(".jrgwc").click(function(){
		var goodImg = $(".jqzoom").find("img").attr('src');
		var goodName =  $(".goodsxq h4").text();
		var goodPrice = $(".p2").text();
		//判断购物车是否有商品
		var carts = $.cookie('carts') ? $.cookie('carts') : "{}";
		var goods = JSON.parse(carts);
		if(goodImg in goods){
			goods[goodImg].num += 1;
		} else {
			goods[goodImg] = {
				img : goodImg,
				name : goodName,
				price : goodPrice,
				num : 1
			}
		}
		$.cookie("carts", JSON.stringify(goods), {expires:7,path:'/'});
		
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
	//购物车飞进
	$(".jrgwc").click(function(){
		$("#msg").show().animate({width: '250px'}, 200).fadeOut(1000);
	})
	
	
//});