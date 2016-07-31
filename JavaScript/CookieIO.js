function setCookie(name,value,time) {
	if (time==-1) {
		document.cookie=name+"="+escape(value)+";expires="+"-1";
	}else{
		var date=new Date();
		date.setDate(date.getDate()+time);
		document.cookie=name+"="+escape(value)+";expires="+date.toGMTString();
	}
}

function getCookie(name) {
	var len=document.cookie.length;
	if (len==0) {return ""};
	var start=document.cookie.indexOf(name+"=")+name.length+1;
	var end=document.cookie.indexOf(";",start);
	if (end==-1) end=len;
	return unescape(document.cookie.substring(start,end));
}