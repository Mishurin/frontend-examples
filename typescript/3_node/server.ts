import * as express from 'express';
import { readFile } from 'fs';

var app = express();

app.get('/', function (req, res) {
  res.send('Hello Igor!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

