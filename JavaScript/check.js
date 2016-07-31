function screensize() {

	var txt=document.getElementById("No.1");
	txt.innerHTML="屏幕大小为:高:"+innerHeight+";宽:"+innerWidth;

	setTimeout(screensize,1000)
}

document.write("<p>浏览器：")
document.write(navigator.appName + "</p>")

document.write("<p>浏览器版本：")
document.write(navigator.appVersion + "</p>")

document.write("<p>代码：")
document.write(navigator.appCodeName + "</p>")

document.write("<p>平台：")
document.write(navigator.platform + "</p>")

document.write("<p>Cookies 启用：")
document.write(navigator.cookieEnabled + "</p>")

document.write("<p>浏览器的用户代理报头：")
document.write(navigator.userAgent + "</p>")

screensize();
