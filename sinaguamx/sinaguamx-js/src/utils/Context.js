"use strict";

var Context = function() {
  var ctx = {
    map: {}
  };

  this.put = function(name, obj) {
    ctx.map[name] = obj;
  };

  this.get = function(name) {
    var obj = undefined;
    if(ctx.map[name] != undefined) {
      obj = ctx.map[name];
    }

    return obj;
  };

  this.clean = function() {
    ctx = {
      map: {}
    };
  };

  this.remove = function(name) {
    ctx.map[name] = undefined;
  };
};

module.exports = Context;