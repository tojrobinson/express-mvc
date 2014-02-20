'use strict';

var express = require('express'),
    dust = require('adaro'),
    path = require('path');

module.exports = function(app) {
   // dust.js
   app.engine('dust', dust.dust({}));
   app.set('views', path.join(__dirname, '/../app/views'));
   app.set('view engine', 'dust');

   app.use(express.favicon(path.join(__dirname, '/../public/img/favicon.ico')));
   app.disable('x-powered-by');
   app.use(express.static(path.join(__dirname, '/../public')));
   app.use(express.logger('dev'));
   app.use(express.json());
   app.use(express.urlencoded());
   app.use(express.methodOverride());
   app.use(express.cookieParser('your secret here'));
   app.use(express.session());
   app.use(app.router);

   // development only
   if ('development' == app.get('env')) {
      app.use(express.errorHandler());
   }
}
