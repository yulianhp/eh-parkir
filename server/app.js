var express = require('express');
var path = require('path');
var cors = require('cors')
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
require('dotenv').config()

var storages = require('./routes/storages');
var visions = require('./routes/visions');
var Transaction = require('./routes/transaction');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise
mongoose.connect('mongodb://alangmahendra:alangmahendra@eh-database-shard-00-00-mqjod.mongodb.net:27017,eh-database-shard-00-01-mqjod.mongodb.net:27017,eh-database-shard-00-02-mqjod.mongodb.net:27017/ehparkir?ssl=true&replicaSet=eh-database-shard-0&authSource=admin');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', storages);
app.use('/visions', visions)
app.use('/transactions', Transaction);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err);
  res.send(err);
});

module.exports = app;
