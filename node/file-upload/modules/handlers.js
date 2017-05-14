var fs = require('fs');
var formidable = require('formidable');

exports.upload = function(request, response) {
	console.log("Rozpoczynam obsługę żądań upload.");
	var form = new formidable.IncomingForm();
	form.parse(request, function(error, fields, files) {
		fs.renameSync(files.upload.path, "test.png");
		fs.readFile('templates/upload.html', function(err, html) {
			response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
			response.write(html);
			response.end();
		});
	});
}
exports.welcome = function(request, response) {
	console.log("Rozpoczynam obsługę żądań welcome.");
	fs.readFile('templates/start.html', function(err, html) {
		response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
		response.write(html);
		response.end();
	});
}
exports.error = function(request, response) {
	console.log("Nie wiem co robić");
	response.write("404 :(");
	response.end();
}
exports.show = function(request, response) {
	fs.readFile("test.png", "binary", function(error, file) {
		response.writeHead(200, {"Content-Type": "image/png"});
		response.write(file, "binary");
		response.end();
	})
}
exports.css = function(request, response) {
	fs.readFile("css/style.css", function(err, html) {
		response.writeHead(200, {"Content-Type": "text/css; charset=utf-8"});
		response.write(html);
		response.end();
	})
}