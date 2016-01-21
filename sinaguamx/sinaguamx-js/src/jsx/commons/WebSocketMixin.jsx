'use strict';

var Constants = require('../../utils/Constants.js');

var WebSocketMixin = function() {
  return {
    sendWebSocketMessage: function(message, onSuccess, onError, onFail) {
      window.ctx.get(Constants.WEB_SOCKET_SERVICE).sendMessage(message, onSuccess, onError, onFail);
    }
  };
};

module.exports = WebSocketMixin;
