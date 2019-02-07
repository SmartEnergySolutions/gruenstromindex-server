'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.coreGsiGET = function coreGsiGET (req, res, next) {
  var plz = req.swagger.params['plz'].value;
  Default.coreGsiGET(plz)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
