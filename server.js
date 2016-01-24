var express     = require('express')
,   app         = express()
,   bodyParser  = require('body-parser')
,   logger      = require('morgan')
,   colors      = require('colors')
,   mongoose    = require('mongoose')
,   path        = require('path')
,   MongoClient = require('mongodb').MongoClient
,   config      = require('./config');




app.listen(config.port);
console.log("Server running on port 3000.".rainbow);
