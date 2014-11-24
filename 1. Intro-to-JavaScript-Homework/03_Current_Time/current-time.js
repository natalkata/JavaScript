var currentDate = new Date();
var h = currentDate.getHours();
var m = currentDate.getMinutes();
if (m < 10) {
	m = "0" + m;
}
console.log(h + ":" + m);