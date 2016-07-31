function clock() {
	var txt=document.getElementById("time");
	var itime=new Date();
<<<<<<< HEAD
	txt.innerHTML="当前时间:"+itime.getFullYear()+"年"+itime.getMonth()+1+"月"+itime.getDate()+
=======
	txt.innerHTML="当前时间:"+itime.getFullYear()+"年"+itime.getMonth()+"月"+itime.getDate()+
>>>>>>> parent of 2e7f37c... using English and add IP information.
		"日"+itime.getHours()+"时"+itime.getMinutes()+"分"+itime.getSeconds()+"秒";
	setTimeout(clock, 500);
}
clock();