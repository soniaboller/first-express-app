var express = require('express');
var ctrl = express.Router();

var users = [
    {
        username: 'test',
        pwd: 'pwd'
    },
    {
        username: 'test2',
        pwd: 'pwd2'
    },
    {
        username: 'test3',
        pwd: 'pwd3'
    }
];

ctrl.get('/', function(req,res,next){
    res.json(users);
    // res.render('view', {})
});

module.exports = ctrl;