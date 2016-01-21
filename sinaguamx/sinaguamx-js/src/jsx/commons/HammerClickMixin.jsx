'use strict';

var Hammer = require('../../libs/hammer.js');

var HammerClickMixin = function() {
  return {
    componentWillMount: function() {
      this.listeneres = [];
    },
    addTapEvent: function(element, callback) {
      var mc = new Hammer.Manager(element);
      //mc.add(new Hammer.Tap({event: 'doubletap', taps: 2}));
      mc.add(new Hammer.Tap({event: 'tap', taps: 1}));
      mc.on('tap', callback);
      this.listeneres.push(mc);
    },
    addDoubleTap : function(element, callback){
      var mc = new Hammer.Manager(element);
      mc.add(new Hammer.Tap({event: 'doubletap', taps: 2}));
      mc.on('doubletap', callback);
      this.listeneres.push(mc);
    },
    componentWillUnmount: function() {
      for(var i= 0; i < this.listeneres.length; i++){
        this.listeneres[i].destroy();
      }
    }
  }
};

module.exports = HammerClickMixin;
