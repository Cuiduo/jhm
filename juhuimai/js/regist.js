;$(function(){
	
	putCodeToDiv();
	$("hqyzm").on("click",putCodeToDiv);
	$("input[type=submit]").on("click",verify);
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