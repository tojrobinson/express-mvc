'use strict';

var c = require('r/app/controllers'),
    m = require('r/app/helpers/middleware');

module.exports = function(app) {
   app.get('/', c.get.index);
}
