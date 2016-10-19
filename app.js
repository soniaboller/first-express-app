var express = require('express');
var path = require('path');
var app = express();
var defaultPort = 3000;



app.listen(process.env.PORT || defaultPort);
console.log('server started');