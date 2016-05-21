var express = require('express'),
    parser  = require('body-parser'),
    swig    = require('swig'),
    session = require('express-session'),
    staticos= require('./middlewares/estaticos'),
    Rutas   = require('./website/views/rutas');

var servidor = function(config){
  config = config || {};

  this.app = express();
  this.app.use(parser.json());
  this.app.use(parser.urlencoded({extended:true}));
  this.app.use(session({secret:"passfrase",resave:false,saveUninitialized:true}));
  this.app.use(staticos);
  this.app.engine('html', swig.renderFile);
  this.app.set('view engine','html');
  this.app.set('views',__dirname + '/website/views/templetes');
  this.app.set('view cache', false);
  
  var ruteo = new Rutas(this);
}

module.exports = servidor;
