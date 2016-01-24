var express     = require('express')
,   app         = express()
,   bodyParser  = require('body-parser')
,   logger      = require('morgan')
,   colors      = require('colors')
,   mongoose    = require('mongoose')
,   path        = require('path')
,   MongoClient = require('mongodb').MongoClient
,   config      = require('./config');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//setupp cors requests

app.use(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Acces-Control-Allow-Methods', 'GET', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});
//middleware logs all requests to the console
app.use(logger('dev'));

mongoose.connect(config.database)

// app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + 'index.html'))
})

app.listen(config.port);
console.log("Server running on port 3000.".rainbow);
