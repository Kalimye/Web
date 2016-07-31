function clock() {
	var txt=document.getElementById("time");
	var itime=new Date();
	txt.innerHTML="当前时间:"+itime.getFullYear()+"年"+itime.getMonth()+"月"+itime.getDate()+
		"日"+itime.getHours()+"时"+itime.getMinutes()+"分"+itime.getSeconds()+"秒";
	setTimeout(clock, 500);
}
clock();