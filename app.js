var express = require('express');
var path = require('path');
var app = express();
var defaultPort = 3000;

// set public views and handlebars
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'hbs');

// require controllers
var homeCtrl = require('./controllers/home');
var playgroundCtrl = require('./controllers/playground');
var userCtrl = require('./controllers/user');

// then we '/' map routes to controllers
app.use('/', homeCtrl);
app.use('/play', playgroundCtrl);
app.use('/user', userCtrl);

app.listen(process.env.PORT || defaultPort);
console.log('server started');