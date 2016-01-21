'use strict';

var React = require('react');
var ReactDOM = require('react-dom')
var ReactRouter = require('react-router');

var Context = require('../utils/Context.js');
var Constants = require('../utils/Constants.js');
var User = require('../modelo/User.js');

var App = require('../components/App.js');
var Login = require('../components/Login.js');
var Home = require('../components/Home.js');
var Welcome = require('../components/Welcome.js');

/**
 * volver a inicializar todas las variables del sistema
 */
window.resetApp = function() {
  window.ctx = new Context();
  window.ctx.put(Constants.USER, new User());
  window.ctx.put(Constants.CONTEXT_PATH, window.getContextPath());
};

/**
* mostrar gif de cargando
*/
window.showLoading = function() {
  console.log('# showLoading #');
};

/**
* ocultar gif de cargando
*/
window.hideLoading = function() {
  console.log('# hideLoading #');
};

/**
 * validar la sesion del usuario, basicamente se valida el token
 * @returns {boolean}
 */
window.validaSession = function() {
  var user = window.ctx.get('user');
  var isSessionValida = false;

  if(user != undefined && user.isValidToken()) {
    isSessionValida = true;
  }

  return isSessionValida;
};

window.getContextPath = function() {
  //var server_back_Prod = 'http://192.168.1.36:8080';
  //var server_back_Dev = 'http://127.0.0.1:8080';
  var base = document.getElementsByTagName('base')[0];
  var contextPath = undefined;

  if (base && base.href && (base.href.length > 0)) {
    base = base.href;

  } else {
    base = document.URL;
  }

  contextPath = base.substr(0, base.indexOf('/', base.indexOf('//') + 2));
  //contextPath = server_back_Dev;
  return contextPath;
};

/**
 * redimencionar la pantalla cada vez que el usuario la redimenciona
 */
window.addEventListener('resize', function() {
  document.querySelector('body').style.width = window.innerWidth + 'px';
  document.querySelector('body').style.height = window.innerHeight + 'px';
});

/**
 * inicializar toda la aplicacion
 */
window.initApp = function () {
  var Route = ReactRouter.Route;
  var DefaultRoute  = ReactRouter.DefaultRoute;
  var NotFoundRoute = ReactRouter.NotFoundRoute;

  document.querySelector('body').style.width = window.innerWidth + 'px';
  document.querySelector('body').style.height = window.innerHeight + 'px';

  window.ctx = new Context();
  window.ctx.put(Constants.USER, new User());
  window.ctx.put(Constants.CONTEXT_PATH, window.getContextPath());

  var routes = (
    React.createElement(Route, {name: "App", handler: App, path: "/"}, 
      React.createElement(Route, {name: "Home", handler: Home}, 

        React.createElement(DefaultRoute, {handler: Welcome})
      ), 
      React.createElement(DefaultRoute, {name: "Login", handler: Login}), 
      React.createElement(NotFoundRoute, {handler: Login})
    )
  );

  ReactRouter.run(routes, function (Handler) {
    ReactDOM.render(React.createElement(Handler, null), document.getElementById('app'));
  });
};
