var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/view-login', function(req, res) {
	res.render('view-login');
});
app.get('/auth/google', function(req, res) {
	res.render('view-start');
});

app.listen(3000);
app.use(function(req, res, next) {
	res.status(404).send('Wybacz, nie moglismy odnaleźć tego, czego żądasz!');
});