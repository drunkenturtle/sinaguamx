'use strict';

var React = require('react');
var ReactRouter = require('react-router');

var welcomeService = require('../modulos/WelcomeService.js');
var ErrorMixin = require('../components/commons/ErrorMixin.js');

var Welcome = React.createClass({
  mixins: [ErrorMixin],
  getInitialState: function() {
    return {
      untexto: ''
    };
  },
  componentWillMount: function() {
    //console.log('# Welcome->componentWillMount #');
  },
  componentDidMount: function() {
    //console.log('# Welcome->componentDidMount #');
  },
  componentWillReceiveProps: function(nextProps) {
    //console.log('# Welcome->componentWillReceiveProps #');
  },
  shouldComponentUpdate: function() {
    //console.log('# Welcome->shouldComponentUpdate #');
    return true;
  },
  componentWillUpdate: function() {
    //console.log('# Welcome->componentWillUpdate #');
  },
  componentDidUpdate: function() {
    //console.log('# Welcome->componentDidUpdate #');
  },
  componentWillUnmount: function() {
    //console.log('# Welcome->componentWillUnmount #');
  },
  onChangeUntexto: function(evt) {
    this.setState({
      untexto: evt.target.value
    });
  },
  onClickMe: function(evt) {

    var onSuccess = function(response) {
      console.log(response);
    };

    var params = {
      untexto: this.state.untexto
    };

    welcomeService.clienteInfo(params, onSuccess, this.onErrorEvent, this.onFailEvent);
  },
  render: function() {
    return (
     <div>
       <input type='text' value={this.state.untexto} placeholder='escribe un texto' onChange={this.onChangeUntexto}/>
       <button onClick={this.onClickMe}>Click Me</button>
     </div>
    );
  }
});

module.exports = Welcome;
