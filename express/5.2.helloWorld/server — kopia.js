var express = require('express');
var app = express();

app.get('/', function(req, res) {
	console.log('Otrzymałek żądanie GET do strony głównej');
	res.send('Hello GET');
});
app.post('/', function(req, res) {
	console.log('Otrzymałem żądanie POST do strony głównej');
	res.send('Hello POST');
});
app.delete('/del_user', function (req, res) { 
	console.log('Otrzymałem żądanie DELETE do strony /del_user'); 
	res.send('Hello DELETE!'); 
});

app.get('/list_user', function(req, res) {
	console.log('Otrzymałem żądanie GET do strony /list_user');
	res.send('Strona z listą użytkowników');
});
app.get('/ab*cd', function(req, res) {
	console.log('Otzrymałem żadanie get do strony /ab*cd');
	res.send('wzór pasuje');
});
var server = app.listen(3000, function() { 
	var host = server.address().address; 
	var port = server.address().port; 
	console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port); 
});

app.use(function (req, res, next) { 
	res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!') 
});


