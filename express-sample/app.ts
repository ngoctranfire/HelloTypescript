import * as express from "express";
import * as path from "path";
import * as morgan from "morgan";

var app: express.Application = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));;

interface User {
  name: string;
  age: number;
}

app.get('/', function (req: express.Request, res: express.Response) {
  let user: User = {
    name: "John",
    age: 23
  };

  res.json(user);
});

app.listen(3000, () => {
  console.log("Sample app listening on port 3000");
})
module.exports = app;
