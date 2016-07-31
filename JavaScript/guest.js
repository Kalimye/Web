var online=getCookie('online');
var username=getCookie('username');
var count=parseInt(getCookie('count'));
if ((username==null)||(username=="")||(count==null)) {
	username=prompt("这是您第一次访问,请输入您的姓名","");
	setCookie('username',username,365);
	setCookie('count',1,365);
}else{
	if (online!="true") {
	count+=1;
	alert(username+",欢迎回来,这是你第"+count+"次访问");
	setCookie('count',count,365);
	setCookie('username',getCookie('username'),365);
	}
}
setCookie('online',true,-1);