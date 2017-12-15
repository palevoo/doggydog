const express = require('express');
var bodyParser = require('body-parser');

const app = express();

const router = require('./router.js');

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  })
  .use(router)
  .listen(3050, () => console.log('Listening on port 3050'))
