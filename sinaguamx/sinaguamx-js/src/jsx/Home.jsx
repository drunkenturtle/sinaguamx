'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var SessionMixin = require('../components/commons/SessionMixin.js');

var Home = React.createClass({
  mixins: [ReactRouter.Navigation, SessionMixin()],
  getInitialState: function() {
    return {
      shouldMount: false
    };
  },
  componentWillMount: function() {
    //console.log('# Home->componentWillMount #');
    this.validaSession();
  },
  componentDidMount: function() {
    //console.log('# Home->componentDidMount #');
  },
  shouldComponentUpdate: function() {
    //console.log('# Home->shouldComponentUpdate #');
    var shouldUpdate = this.validaSession();
    return shouldUpdate;
  },
  componentWillReceiveProps: function(nextProps) {
    //console.log('# Home->componentWillReceiveProps #');
  },
  componentWillUpdate: function() {
    //console.log('# Home->componentWillUpdate #');
  },
  componentDidUpdate: function() {
    //console.log('# Home->componentDidUpdate #');
  },
  componentWillUnmount: function() {
    //console.log('# Home->componentWillUnmount #');
    window.resetApp();
  },
  render: function() {
    if(!this.state.shouldMount) {
      console.log('session no valida!!');
      return (<div></div>);
    }

    return (<ReactRouter.RouteHandler/>);
  }
});

module.exports = Home;
