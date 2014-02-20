'use strict';

exports.index = function(req, res) {
   res.render('index', {
      message: 'Hello, world!'
   });
}
