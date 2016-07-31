function clock() {
	var txt=document.getElementById("time");
	var itime=new Date();
	txt.innerHTML="Year: "+itime.getFullYear()+" Month: "+itime.getMonth()+" Day: "+itime.getDate()+" Time: "+itime.getHours()+"."+itime.getMinutes()+"."+itime.getSeconds();
	setTimeout(clock, 500);
}
clock();