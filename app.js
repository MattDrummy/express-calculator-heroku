'use strict';

var express = require('express');
var app = express();
// Now make your server!
var port = 5500;
var numbers = '/:num1/:num2'
app.get(`/add${numbers}`, addNumbers);
app.get(`/sub${numbers}`, subNumbers);
app.get(`/mult${numbers}`, multNumbers);
app.get(`/div${numbers}`, divNumbers);
app.listen(5500);

function getNumbers(req, funct) {
  return funct(parseFloat(req.params.num1), parseFloat(req.params.num2));
}

function addNumbers(req, res) {
  var num = getNumbers(req, function(a,b) {
    return a+b;
  });
  if (!isNaN(num)){
    res.send(`${num}`);
  } else {
    res.sendStatus(400)
  }
}

function subNumbers(req, res) {
  var num = getNumbers(req, function(a,b) {
    return a-b;
  });
  if (!isNaN(num)){
    res.send(`${num}`);
  } else {
    res.sendStatus(400)
  }
}

function multNumbers(req, res) {
  var num = getNumbers(req, function(a,b) {
    return a*b;
  });
  if (!isNaN(num)){
    res.send(`${num}`);
  } else {
    res.sendStatus(400)
  }
}

function divNumbers(req, res) {
  var num = getNumbers(req, function(a,b) {
    return a/b;
  });
  if (!isNaN(num)){
    res.send(`${num}`);
  } else {
    res.sendStatus(400)
  }
}
module.exports = {
  app : app
}
