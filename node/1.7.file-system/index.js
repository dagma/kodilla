var fs = require('fs');

var folderPath = './';
var fileName = 'pliczek.txt';

fs.readdir(folderPath, function(err, files) {
	if (err) throw err
	console.log("W katalogu, znajdują się następujące pliki: ");
	console.log(files);
	fs.writeFile(fileName, files, function(err, data) {
		if (err) throw err;
		console.log("Dane zapisane do pliku.");
	});
});