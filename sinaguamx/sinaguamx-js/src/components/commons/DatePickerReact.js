'use strict';

var React = require('react');

var Context = require('../../utils/Context.js');
var Constants = require('../../utils/Constants.js');

var DatePickerReact = React.createClass({displayName: "DatePickerReact",
  getInitialState: function() {
    return {
      isShow: false,
      label: '',
      datePicked: new Date(),
      dateView: new Date(),
      dateFormat: this.props.dateFormat,
      inputLabel: this.props.inputLabel
    };
  },
  getDefaultProps: function() {
    return {
      dateFormat: 'dd/mm/yyyy'
    };
  },
  componentWillMount: function() {
    var oneMinute = 60 * 1000;
    var oneHour = oneMinute * 60;
    var oneDay = oneHour * 24;
    var oneWeek = oneDay * 7;

    var ctx = new Context();
    ctx.put('oneMinute', oneMinute);
    ctx.put('oneHour', oneHour);
    ctx.put('oneDay', oneDay);
    ctx.put('oneWeek', oneWeek);
    ctx.put('lastDayInMonth', Constants.lastDayInMonth);

    this.ctx = ctx;
  },
  componentDidMount: function() {

  },
  componentWillReceiveProps: function(nextProps) {
    this.setState({

    });
  },
  shouldComponentUpdate: function() {
    return true;
  },
  componentWillUpdate: function() {
  },
  componentDidUpdate: function() {
  },
  componentWillUnmount: function() {
  },
  showDatePicker: function(evt) {
    evt.preventDefault();
    var showOrHide = false;

    if(this.state.isShow) {
      showOrHide = false;

    } else {
      showOrHide = true;
    }

    this.setState({
      isShow: showOrHide
    });
  },
  hideDatePicker: function() {
    this.setState({
      isShow: false
    });
  },
  onClickAceptarDatePicked: function(evt) {
    this.hide();
  },
  onChangeDatePicked: function(evt) {

  },
  getDatePicked: function() {
    return this.state.datePicked;
  },
  isBisiesto: function(dateView) {
    var isBisiesto = false;
    var anioCalcular = dateView.getFullYear();
    //calcular si es biciesto y comunicarlo
    if ((anioCalcular % 4 == 0) && ((anioCalcular % 100 != 0) || (anioCalcular % 400 == 0))) {
      isBisiesto = true;
    }

    return isBisiesto;
  },
  lastDayInMonth: function(dateView) {
    var lastDay = 0;
    var month = dateView.getMonth();
    var isBiciesto = false;
    var BICIESTO_LAST_DAY = 28;

    isBiciesto = this.isBisiesto(dateView);

    if(isBiciesto && month == Constants.Months.FEBREO) {
      lastDay = BICIESTO_LAST_DAY;

    } else {
      lastDay = this.ctx.get('lastDayInMonth')[month];
    }

    return lastDay;
  },
  firstDayInWeek: function(dateView) {
    var firstDayInWeek = 0;
    var dateTmp = new Date(dateView.getTime());
    var FIRST_DAY = 1;

    dateTmp.setDate(FIRST_DAY);

    return dateTmp.getDay();
  },
  onPickDateOn: function(dayCount, dateView, evt) {
    evt.preventDefault();
    var datePicked = new Date(dateView.getTime());

    datePicked.setDate(dayCount);

    this.setState({
      datePicked: datePicked,
      isShow: false
    });

    if(this.props.onDatePicked != undefined) {
      this.props.onDatePicked(datePicked, evt);
    }
  },
  onPickDateOff: function(dayCount, dateView, evt) {
    evt.preventDefault();
  },
  onNextMonth: function(evt) {
    evt.preventDefault();
    var dateView = this.state.dateView;

    dateView.setMonth(dateView.getMonth() + 1);

    this.setState({
      dateView: dateView
    });
  },
  onNextYear: function(evt) {
    evt.preventDefault();
    var dateView = this.state.dateView;

    dateView.setFullYear(dateView.getFullYear() + 1);

    this.setState({
      dateView: dateView
    });
  },
  onPrevMonth: function(evt) {
    evt.preventDefault();
    var dateView = this.state.dateView;

    dateView.setMonth(dateView.getMonth() - 1);

    this.setState({
      dateView: dateView
    });
  },
  onPrevYear: function(evt) {
    evt.preventDefault();
    var dateView = this.state.dateView;

    dateView.setFullYear(dateView.getFullYear() - 1);

    this.setState({
      dateView: dateView
    });
  },
  findPos: function (obj) {
    var curleft = 0;
    var curtop = 0;

    if (obj.offsetParent) {
      curleft = obj.offsetLeft
      curtop = obj.offsetTop

      while (obj = obj.offsetParent) {
        curleft += obj.offsetLeft
        curtop += obj.offsetTop
      }
    }

    return {
      top: curtop,
      left: curleft
    };
  },
  reset: function() {
    this.setState({
      isShow: false,
      datePicked: new Date(),
      dateView: new Date(),
    });
  },
  render: function() {
    var self = this;
    var componentShow = 'componentShow';
    var componentHide = 'componentHide';
    var datePickerStyle = 'cal-container';
    var rowsHTML = [];
    var colsHTML = [];
    var calTitle = '';
    var datePicked = '';

    if(this.state.isShow) {
      datePickerStyle += ' ' + componentShow;

    } else {
      datePickerStyle += ' ' + componentHide;
    }
    //crear el calendario
    var initCol = 0;
    var MAX_DAYS_PER_WEEK = 7;
    var continueDayOfMonth = false;

    var dayCount = 0;
    var lastDay = this.lastDayInMonth(this.state.dateView);
    var dayInWeek = this.firstDayInWeek(this.state.dateView);

    while(dayCount <= lastDay) {
      var colHTML = [];

      for(initCol = 0; initCol < MAX_DAYS_PER_WEEK; initCol++) {
        if(initCol == dayInWeek && !continueDayOfMonth) {
          dayCount++;
          continueDayOfMonth = true;
        }

        if(dayCount > 0 && dayCount <= lastDay) {
          var onPickDateOn = function(dayCount, dateView, evt){
            self.onPickDateOn(dayCount, dateView, evt);
          }.bind(self, dayCount, this.state.dateView);

          var stylePicked = {};

          if(this.state.datePicked.getDate() == dayCount &&
              this.state.datePicked.getMonth() == this.state.dateView.getMonth() &&
              this.state.datePicked.getFullYear() == this.state.dateView.getFullYear()) {

            stylePicked = {
              background: '#6FC1D6'
            };
          }

          colHTML.push(React.createElement("td", null, React.createElement("a", {href: "#", style: stylePicked, onClick: onPickDateOn}, dayCount)));
          dayCount++;

        } else {
          var onPickDateOff = function(dayCount, dateView, evt){
            self.onPickDateOff(dayCount, dateView, evt);
          }.bind(self, 0, this.state.dateView);

          colHTML.push(React.createElement("td", {className: "cal-off"}, React.createElement("a", {href: "#", onClick: onPickDateOff})));
        }
      }

      rowsHTML.push(React.createElement("tr", null, 
        colHTML
      ));
    }
    //crear etiqueta del titulo de mes y anio que se esta calculando
    calTitle = Constants.MonthsFull[this.state.dateView.getMonth()] + ' ' + this.state.dateView.getFullYear();
    //crear etiqueta para el campo en base al formato deseado (TODO)
    datePicked = (this.state.datePicked.getDate() + '/' + (this.state.datePicked.getMonth() + 1) + '/' + this.state.datePicked.getFullYear());

    return (
      React.createElement("div", {style: {width:'100%', float:'left', marginRight: '3%'}}, 
        React.createElement("span", {style: {float: 'left', marginLeft: '3%', marginRight: '3%'}}, this.state.inputLabel), 
        React.createElement("span", {style: {float: 'left', marginRight: '3%'}}, 
          React.createElement("input", {type: "text", value: datePicked, onChange: this.onChangeDatePicked, readOnly: true})
        ), 
        React.createElement("span", {style: {float: 'left', marginLeft: '3%', marginRight: '3%'}}, 
          React.createElement("a", {id: this.props.idCal, className: "IconCalStyle", href: "#", onClick: this.showDatePicker})
        ), 

        React.createElement("section", {className: datePickerStyle}, 
          React.createElement("div", {className: "cal"}, 
            React.createElement("table", {className: "cal-table"}, 
              React.createElement("caption", {className: "cal-caption"}, 
                React.createElement("a", {href: "#", className: "prev", onClick: this.onPrevYear}, "««"), 
                React.createElement("a", {href: "#", className: "prev", onClick: this.onPrevMonth}, "«"), 
                calTitle, 
                React.createElement("a", {href: "#", className: "next", onClick: this.onNextYear}, "»»"), 
                React.createElement("a", {href: "#", className: "next", onClick: this.onNextMonth}, "»")
              ), 
              React.createElement("thead", null, 
                React.createElement("tr", null, 
                  React.createElement("td", {className: "cal-thead-td"}, "D"), 
                  React.createElement("td", {className: "cal-thead-td"}, "L"), 
                  React.createElement("td", {className: "cal-thead-td"}, "M"), 
                  React.createElement("td", {className: "cal-thead-td"}, "M"), 
                  React.createElement("td", {className: "cal-thead-td"}, "J"), 
                  React.createElement("td", {className: "cal-thead-td"}, "V"), 
                  React.createElement("td", {className: "cal-thead-td"}, "S")
                )
              ), 
              React.createElement("tfoot", null, 
                React.createElement("tr", null, 
                  React.createElement("td", {colSpan: "100%"}
                  )
                )
              ), 
              React.createElement("tbody", {className: "cal-body"}, 
                rowsHTML
              )
            )
          )
        )
      )
    );
  }
});

module.exports = DatePickerReact;
