'use strict';

var React = require('react');
var ReactRouter = require('react-router');

var User = require('../modelo/User.js');
var Constants = require('../utils/Constants.js');
var LoginService = require('../modulos/LoginService.js');
var ErrorMixin = require('../components/commons/ErrorMixin.js');

var Login = React.createClass({
  mixins: [ReactRouter.Navigation, ErrorMixin],
  getInitialState: function() {
    return {
      user: '',
      passpwd: ''
    };
  },
  componentWillMount: function() {
    //console.log('# Login->componentWillMount #');
  },
  componentDidMount: function() {
    //console.log('# Login->componentDidMount #');
  },
  componentWillReceiveProps: function(nextProps) {
    //console.log('# Login->componentWillReceiveProps #');
  },
  shouldComponentUpdate: function() {
    //console.log('# Login->shouldComponentUpdate #');
    return true;
  },
  componentWillUpdate: function() {
    //console.log('# Login->componentWillUpdate #');
  },
  componentDidUpdate: function() {
    //console.log('# Login->componentDidUpdate #');
  },
  componentWillUnmount: function() {
    //console.log('# Login->componentWillUnmount #');
  },
  clear: function() {
    this.setState({
      user: '',
      passpwd: ''
    });
  },
  onChangeUser: function(evt) {
    //console.log('Name-> ' + evt.target.value);
    this.setState({
      user: evt.target.value
    });
  },
  onChangePasspwd: function(evt) {
    //console.log('Pass-> ' + evt.target.value);
    this.setState({
      passpwd: evt.target.value
    });
  },
  onClickLogin: function() {
    var self = this;
    var error = undefined;

    var onSuccess = function(response) {
      //console.log('response.jws-> ' + response.jws);
      var user = new User();
      user.setToken(response.jws);
      window.ctx.put(Constants.USER, user);
      self.transitionTo('Home');
    };

    error = this.validaLogin();

    if(!error.isError) {
      var request = {
        user: this.state.user,
        pass: this.state.passpwd
      };

      LoginService.login(request, onSuccess, this.onErrorEvent, this.onFailEvent);

    } else {
      this.setState({});
    }
  },
  validaLogin: function() {
    var error = {
      isError: false,
      message: ''
    };

    if(this.state.user.trim() == '') {
      error = {
        isError: true,
        message: 'El nombre de usuario y contrase\u00f1a es requerido.'
      };
    }

    if(this.state.passpwd.trim() == '') {
      error = {
        isError: true,
        message: 'El nombre de usuario y contrase\u00f1a es requerido.'
      };
    }

    return error;
  },
  render: function() {
    return (
      <div className='login'>
        <div className='login_cuadro'>
          <div style={{width: '100%', height: '25%', float: 'left'}}>Login header 8</div>
          <div style={{width: '100%', height: '25%', float: 'left'}}>
            <label htmlFor='name'>Nombre</label>
            <input name='name' type='text' placeholder='Nombre de usuario' maxLength='100'
                   style={{width: '100%', height: '50%', color: '#000000'}} value={this.state.name} onChange={this.onChangeUser} />
          </div>
          <div style={{width: '100%', height: '25%', float: 'left'}}>
            <label htmlFor='password'>Contraseña</label>
            <input name='password' type='password' placeholder='Contraseña' maxLength='100'
                   style={{width: '100%', height: '50%', color: '#000000'}} value={this.state.pass} onChange={this.onChangePasspwd} />
          </div>
          <div style={{width: '100%', height: '25%', float: 'left'}}>
            <div style={{width: '100%', height: '33.33%', float: 'left'}}>a</div>
            <div style={{width: '100%' , height: '33.33%', float: 'left'}}>
              <div style={{width: '33.33%', height: '100%', float: 'left'}}>a</div>
              <div style={{width: '33.33%', height: '100%', float: 'left'}}>
                <button type='button' className='boton_1' style={{}} onClick={this.onClickLogin}>Entrar</button>
              </div>
              <div style={{width: '33.33%', height: '100%', float: 'left'}}>a</div>
            </div>
            <div style={{width: '100%', height: '33.33%', float: 'left'}}>a</div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Login;
