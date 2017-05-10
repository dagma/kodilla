var os = require('os');
function getUptime() {

	var totalSeconds = os.uptime();
	if ((totalSeconds / 60) < 1) {
		return timeUnits(totalSeconds);
	}

	var seconds = totalSeconds % 60;
	var totalMminutes = totalSeconds / 60;

	if ((totalMminutes / 60) < 1) {
		return timeUnits(seconds, totalMminutes);
	}
	var minutes = totalMminutes % 60;
	var totalHours = totalSeconds / 3600;

	return timeUnits(seconds, minutes, totalHours); 

}

function timeUnits(sec, min, h) {
	var toReturn;
	sec = sec.toFixed(0) || 0;
	min = min.toFixed(0) || 0;
	h = h.toFixed(0) || 0;

	if (h > 0) {
		toReturn = h + ' godz. ';	
	}
	if (min > 0) {
		toReturn += min + ' min. ';
	}
	if (sec > 0) {
		toReturn += sec + ' sek. ';
	}
	return console.log('Uptime: ~', toReturn);
}
exports.print = getUptime;