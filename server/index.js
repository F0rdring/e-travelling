var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var main = require('./mainRouter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('build'));
app.use(main);

app.listen(80);