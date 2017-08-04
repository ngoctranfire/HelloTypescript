
import * as express from "express";
import { Server } from "http";
var path = require('path');
var logger = require('morgan');

var app: express.Application = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));;

app.get('/hello', function(req: express.Request, res: express.Response) {
  let name: string = req.query.name || "ngoc";
  res.json(`Hello, It is nice to meet you ${name}. I hope you are having a good time!`);
});

app.listen(3000, function() {
  console.log("Starting server on port 3000");
})
module.exports = app;
