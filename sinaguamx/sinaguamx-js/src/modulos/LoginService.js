"use strict";

/**
 * Created by developer on 11/11/15.
 */
var Constants = require('../utils/Constants.js');
var commonService = require('../modulos/CommonService.js');

var paths = {
  login: '/sinaguamx/login'
};

var LoginService = {
  login: function(params, onSuccess, onError, onFail) {
    commonService.ajax(paths.login, params, onSuccess, onError, onFail);
  }
};

module.exports = LoginService;
