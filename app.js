var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var compression = require('compression');

var index = require('./routes/index');

var app = express();

app.set('view cache', true);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.use(express.static(path.join(__dirname, 'public')));
app.engine('jsx', require('express-react-views').createEngine({ beautify: true}));

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.use((req, res, next) =>{
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use((err, req, res, next) =>{
    res.status(err.status || 500);
    console.log(err);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.use((err, req, res, next) =>{
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
