'use strict'

module.exports.funcHelloWorldGET = function funcHelloWorldGET(req, res, next) {
  res.send({
    message: 'get :Hello World '
  });
};
'use strict'

module.exports.helloWorld = function helloWorld(req, res, next) {
  res.send({
    message: 'helloWorld : ' + req.data.value.name
  });
};
'use strict'

module.exports.helloWorld = function helloWorld(req, res, next) {
  res.send({
    message: 'hello : ' + req.data.value.name
  });
};