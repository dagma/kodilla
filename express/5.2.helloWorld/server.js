var express = require('express');
var app = express();

app.use(function(req, res, next) {
	console.log('Hej, jestem pośrednikiem między żądaniem a odpowiedzią!');
	next();
});

app.get('/', function(req, res) {
	res.send('Hello world');
});


app.listen(3000);