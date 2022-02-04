'use strict'

var varHelloWorldController = require('./HelloWorldControllerService');

module.exports.funcHelloWorldGET = function funcHelloWorldGET(req, res, next) {
  varHelloWorldController.funcHelloWorldGET(req.swagger.params, res, next);
};
'use strict'

var varhelloworldController = require('./helloworldControllerService');

module.exports.helloWorld = function helloWorld(req, res, next) {
  varhelloworldController.helloWorld(req.swagger.params, res, next);
};
'use strict'

var varhelloworldController = require('./helloworldControllerService');

module.exports.helloWorld = function helloWorld(req, res, next) {
  varhelloworldController.helloWorld(req.swagger.params, res, next);
};