var express = require('express');
var ctrl    = express.Router();

var data = [
    {
        name: 'Brooklyn Boulders',
        location: 'West Loop',
        notes: 'CLIMB ON'
    },
    {
        name: 'CPY',
        location: 'Old Town',
        notes: 'yogini'
    },
    {
        name: 'So Far Sounds',
        location: 'all around da city',
        notes: 'music baby'
    }
];

// build first API

ctrl.get('/', function(req,res,next){
    res.json(data)
});

ctrl.get('/1', function(req,res,next){
    res.json(data[0])
});

ctrl.get('/2', function(req,res,next){
    res.json(data[1])
});

ctrl.get('/3', function(req,res,next) {
    res.json(data[2])
});

module.exports = ctrl;