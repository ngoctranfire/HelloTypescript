"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require('path');
var logger = require('morgan');
var app = express();
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
;
app.get('/hello', function (req, res) {
    var name = req.query.get("name");
    res.json("Hello, It is nice to meet you " + name + ". I hope you are having a good time!");
});
module.exports = app;
//# sourceMappingURL=app.js.map