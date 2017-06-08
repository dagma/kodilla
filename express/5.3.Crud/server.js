var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var fs = require('fs');

var fileContent;

app.use(bodyParser.json());


app.get('/getNote', function(req, res) {
	fs.readFile('./test.json', 'utf8', function(err, data) {
		if (err) throw err;
		fileContent = data;
		res.send(data);
	});
});
app.post('/updateNote/:note', function(req, res) {
	fileContent += req.params.note;
	fs.writeFile('./test.json', fileContent, function(err) {
		if (err) throw err;
		console.log('file updated');
		res.send('file updated'); 
	});

});

app.listen(3000);