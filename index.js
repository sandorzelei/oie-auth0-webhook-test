var metadata = require('./webtask.json');
var express = require('express');

var app = express();

app.get('/meta', function(req, res) {
    res.status(200).send();
});

app.post('/meta', function(req, res) {
    res.status(200).send();
});

app.get('/meta', function(req, res) {
    res.status(200).send(metadata);
});

module.exports = app;
