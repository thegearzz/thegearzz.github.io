var off = "img/ledoff.png";
var on = "img/ledon.png";
var rows = 7;
var colums = 7;
var min = 0;
var max = 1;
setInterval(blinkenLight, 1000);

function blinkenLight() {
	for (var i = rows - 1; i >= 0; i--) {
		for (var j = colums - 1; j >= 0; j--) {
			var random = Math.round(Math.random());
			if (random == 1) {
				document.getElementById("led" + i.toString() +"-"+ j.toString()).src = on;
			} else {
				document.getElementById("led" + i.toString() +"-"+ j.toString()).src = off;
			}
		}
	}
}