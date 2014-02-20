'use strict';

var express = require('express'),
    http = require('http'),
    app = express(),
    config = require('./config');

config.init(app);
config.routes(app);

http.createServer(app).listen(config.settings.serverPort, function() {
   console.log(config.settings.appName + ' running in ' + app.get('env') + ' mode at: ' + config.settings.serverUrl);
});
