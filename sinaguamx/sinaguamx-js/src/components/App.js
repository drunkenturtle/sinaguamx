'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var RouteHandler = ReactRouter.RouteHandler;

var Constants = require('../utils/Constants.js');

var App = React.createClass({displayName: "App",
  mixins: [ ReactRouter.Navigation ],
  getInitialState: function() {
    return {
    };
  },
  componentWillMount: function() {
    //console.log('# App->componentWillMount #');
  },
  componentDidMount: function() {
    //console.log('# App->componentDidMount #');
  },
  componentWillReceiveProps: function(nextProps) {
    //console.log('# App->componentWillReceiveProps #');
  },
  shouldComponentUpdate: function() {
    //console.log('# App->shouldComponentUpdate #');
    return true;
  },
  componentWillUpdate: function() {
    //console.log('# App->componentWillUpdate #');
  },
  componentDidUpdate: function() {
    //console.log('# App->componentDidUpdate #');
  },
  componentWillUnmount: function() {
    //console.log('# App->componentWillUnmount #');
  },
  render: function() {
    //console.log('# App->render #');
    return (
      React.createElement(RouteHandler, null)
    );
  }
});

module.exports = App;
