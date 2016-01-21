'use strict';

var SessionMixin = function() {
  return {
    validaSession: function() {
      if(!window.validaSession()) {
        this.setState({shouldMount: false});
        this.transitionTo('Login');
        return false;

      } else {
        this.setState({shouldMount: true});
      }

      return true;
    }
  }
};

module.exports = SessionMixin;