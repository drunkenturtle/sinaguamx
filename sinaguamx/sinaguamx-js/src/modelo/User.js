"use strict";

var User = function() {
  var user = {
    idUser: undefined,
    name: undefined,
    token: undefined,
    jws: undefined,
    isValidToken: false,
    isValidJws: false
  };

  this.setJws = function(jws) {
    user.jws = jws;
    user.isValidJws = true;
  };

  this.getJws = function() {
    return user.jws;
  };

  this.setToken = function(token) {
    user.token = token;
    user.isValidToken = true;
  };

  this.getToken = function() {
    return user.token;
  };

  this.setIdUser = function(idUser) {
    user.idUser = idUser;
  };

  this.getIdUser = function() {
    return user.idUser;
  };

  this.setName = function(name) {
    user.name = name;
  };

  this.getName = function() {
      return user.name;
  };

  this.isValidToken = function() {
    if(user != undefined && user.token != undefined && user.token.trim() != '') {
      user.isValidToken = true;

    } else {
      user.isValidToken = false;
    }

    return user.isValidToken;
  };

  this.isValidJws = function() {
    if(user != undefined && user.jws != undefined && user.jws.trim() != '') {
      user.isValidJws = true;

    } else {
      user.isValidJws = false;
    }

    return user.isValidJws;
  };
};

module.exports = User;
