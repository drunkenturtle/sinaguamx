'use strict'
/**
 * Created by drunkenturtle on 06/01/16.
 */
var Constants = require('../utils/Constants.js');
var commonService = require('../modulos/CommonService.js');

var paths = {
  clienteInfo: '/clienteInfo'
};

var WelcomeService = {
  clienteInfo: function(params, onSuccess, onError, onFail) {
    commonService.ajax(paths.clienteInfo, params, onSuccess, onError, onFail);
  }
};

module.exports = WelcomeService;
