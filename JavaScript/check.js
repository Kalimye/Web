function screensize() {

	var txt=document.getElementById("No.1");
	txt.innerHTML="Screen&nbsp:&nbspHeight:&nbsp"+innerHeight+"&nbsp;&nbspWidth&nbsp:&nbsp"+innerWidth;

	setTimeout(screensize,1000)
}

document.write("<p>Browser：")
document.write(navigator.appName + "</p>")

document.write("<p>Browser Versions：")
document.write(navigator.appVersion + "</p>")

document.write("<p>Code：")
document.write(navigator.appCodeName + "</p>")

document.write("<p>Platform：")
document.write(navigator.platform + "</p>")

document.write("<p>Cookies isEnabled：")
document.write(navigator.cookieEnabled + "</p>")

document.write("<p>Your Agent：")
document.write(navigator.userAgent + "</p>")

screensize();