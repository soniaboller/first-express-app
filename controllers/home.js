// out module requires express + express.Router()
var express = require('express');
var ctrl    = express.Router();

ctrl.get('/', function (req,res,next) {
    res.render('index', {
        message: 'yaaahoooo it is russell\'s birthday!!'
    })
});

// '/home' indicates localhost/home
ctrl.get('/hello', function(req,res,next){
    res.render('hello',{
        name: 'dude',
        adj: 'HILARIOUS',
        framework: 'express.js'
    })
});

// export controller
module.exports = ctrl;