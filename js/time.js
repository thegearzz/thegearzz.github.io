
setInterval(getTime, 10);
//basic time function thingy
function getTime() {
	var monthYear = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
	var now = new Date();
	var day = now.getDate();
	var months = now.getMonth();
	var year = now. getFullYear()
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	var millisecond = now.getMilliseconds();
	var month = monthYear[months];
	var time = ""
	
	if (hour > 12) {
		hour = hour - 12;
	}
	if (hour < 10) {
		hour = "0"+hour.toString();
	}
	
	time = "Current Date and Time: "+month+"/"+day+"/"+year+" "+hour+":"+minute+":"+second+":"+millisecond;
	document.getElementById("currentTime").innerHTML = time;
}

