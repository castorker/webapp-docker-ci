// Simple node.js and express web app for Docker CI
// For training purposes only
'use strict';

var express = require('express'),
    app = express(),
    port = 5000;

var title = 'Dockerized Web App';
var heading1 = 'DevOps';
var heading2 = 'Automated Workflow working!';
var listitem1 = 'Docker';
var listitem2 = 'Continuous Integration (CI)';
var listitem3 = 'Continuous Delivery (CD)';

app.set('views', './src/views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
    res.render('index', {
        title: title,
        heading1: heading1,
        heading2: heading2,
        listitem1: listitem1,
        listitem2: listitem2,
        listitem3: listitem3
    });
});

app.listen(port);
module.exports.getApp = app;