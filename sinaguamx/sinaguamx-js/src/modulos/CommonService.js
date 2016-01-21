"use strict";

var Constants = require('../utils/Constants.js');

var httpCodes = {
  OK: 200,
  FAIL: 500
};

var CommonService = {
  ajax: function(url, params, onSuccess, onError, onFail) {
    var user = ctx.get('user');

    window.showLoading();
    $.ajax({
      url: (Constants.appBackPath + Constants.appBackCtx + url),
      headers: {
      	'Accept': 'application/json',
      	'withCredentials': true,
      	'jws': user.getJws(),
      	'Content-Type': 'application/json'
    	},
      dataType: 'json',
      contentType: 'application/json',
      method: 'POST',
      data: JSON.stringify(params),
      success: function(data) {
        hideLoading();
        if(data.code == httpCodes.OK) {
          onSuccess(data);

        } else {
          onError(data);
        }

      }.bind(this), error: function(xhr, status, err) {
        hideLoading();
        onFail(err);

      }.bind(this)
    });
  },
  ajaxNoLoading: function(url, params, onSuccess, onError, onFail) {
    var user = ctx.get('user');

    $.ajax({
      url: (Constants.appBackPath + Constants.appBackCtx + url),
      headers: {
        'Accept': 'application/json',
        'withCredentials': true,
        'jws': user.getJws(),
        'Content-Type': 'application/json'
      },
      dataType: 'json',
      contentType: 'application/json',
      method: 'POST',
      data: JSON.stringify(params),
      success: function(data) {
        if(data.code == httpCodes.OK) {
          onSuccess(data);

        } else {
          onError(data);
        }

      }.bind(this), error: function(xhr, status, err) {
        onFail(err);

      }.bind(this)
    });
  }
};

module.exports = CommonService;
