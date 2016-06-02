;$(function(){
	//用户名注册
	    var validator;
    
        $.validator.setDefaults({
            debug: true
        });

        validator = $("#demoForm").validate({
            rules: {
                username: {
                    required: true, //必填项
                    mobile : 11
                },
                password: {
                    required: true,
                    minlength: 6,
                    maxlength: 10,
                    rangelength:[6,10]
                },
                "confirm-password": {
                    equalTo: "#password"
                }
            },
            messages: {
                username: {
                    required: "必须填写用户名",
                    minlength: "用户名最小为2位",
                    maxlength: "用户名最大为10位",
                    rangelength: "用户名应该在2-10位",
                    remote: "用户名不存在"
                },
                password: {
                    required: "必须填写密码",
                    minlength: "密码最小为6位",
                    maxlength: "密码最大为16位"
                },
                "confirm-password": {
                    equalTo: "两次输入的密码不一致"
                }
            },
            submitHandler: function (form) {
                console.log($(form).serialize());
            }
        });
        //验证手机号
        $.validator.addMethod("mobile", function(value, element, params){
            var mobile = /^[1][3578]\d{9}$/;
            return this.optional(element) || (mobile.test(value));  //判断是否指定了required
        }, $.validator.format("请填写正确的{0}位手机号~")); //取到规则里写的值
		$("#check").on("click",verify);
        $("#check").click(function () {
         if($("#yhxy")[0].checked){
    		alert($("#demoForm").valid() ? "恭喜您注册成功,点击确定并登录" : "填写错误");
            
//          $("#dengru").html("欢迎：");
//          $("#zhuce").html($("#username").val());
            var usernames=$("#username").val();
            var paswords=$("#password").val();
            var names = $.cookie('names') ? $.cookie('names') : "{}";
            var nm=JSON.parse(names);
            nm[usernames]={
            	name:usernames,
            	pasword:paswords
            }
            $.cookie("names",JSON.stringify(nm),{expires:7,path:'/'});
            location.href="login.html"
    	}else{
    		alert("请阅读用户协议")
    	}
        });
    	
	
	
	
	
	
	
	
	//验证码
	putCodeToDiv();
	$("hqyzm").on("click",putCodeToDiv);
	$("#check").on("click",verify);
		function setLibs(){
			var arr = [];
			for(var i=65;i<=90;i++){
				var co=String.fromCharCode(i);
				arr.push(co);
			}
			for(var i=48;i<=57;i++){
				var co=String.fromCharCode(i);
				arr.push(co);
			}
			for(var i=97;i<=122;i++){
				var co=String.fromCharCode(i);
				arr.push(co);
			}
			return arr;
		}
		/*生成验证码  参数为验证码的位数*/
		function getCodes(num) 
		{
			var codes = "";
			var arr = setLibs();
			for(var i=1; i<=num; i++)
			{
				var index = parseInt(Math.floor(Math.random()*arr.length));
				codes = codes + arr[index];
			}
			return codes;
		}
		/*生成的验证码放到指定div中*/
		var ma; 
		function putCodeToDiv()
		{
			ma = getCodes(6);
			$("#codediv").html(ma);
		}
		/*验证用户输入的验证码正确性*/
		function verify()
		{
			var code = $("#codetxt").val();
			if(code.toLowerCase() != ma.toLowerCase()){
				$("#tips").html("请输入验证码");
				$("#codetxt").val("");
				$("#codetxt").focus();
				putCodeToDiv();
			}else{
				$("#tips").html("√");
			}
		}	
});