'use strict';

var ErrorMixin = function() {
  return {
    onErrorEvent: function(response) {
      console.log(response);
    },
    onFailEvent: function(response) {
      console.log(response);
    }
  }
};

module.exports = ErrorMixin;
