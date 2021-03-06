function getUptime(totalSeconds) {
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
	var toReturn = '';
	sec = (sec || 0).toFixed(0);
	min = (min || 0).toFixed(0);
	h = (h || 0).toFixed(0);

	if (h > 0) {
		toReturn = h + ' godz. ';	
	}
	if (min > 0) {
		toReturn += min + ' min. ';
	}
	if (sec > 0) {
		toReturn += sec + ' sek. ';
	}
	return console.log(toReturn);
}
exports.print = getUptime;