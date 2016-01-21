"use strict";

var Constants = {
  lastDayInMonth: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  MonthsFull: ['ENERO', 'FEBREO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'],
  Months: {ENERO: 0, FEBREO: 1, MARZO: 2, ABRIL: 3, MAYO: 4, JUNIO: 5, JULIO: 6, AGOSTO: 7, SEPTIEMBRE: 8, OCTUBRE: 9, NOVIEMBRE: 10, DICIEMBRE: 11},
  EXCEL_CONTENCT_TYPE: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  appBackPath: 'http://127.0.0.1:8080',
  wsBackPath: 'ws://127.0.0.1:8000',
  appBackCtx: '/sinaguamx-admin',
  USER: 'user',
  JWS: 'jws',
  PATH: 'path',
  PARAMS: 'params',
  REST_SERVICE: '/cliente/service',
  CONTEXT_PATH: 'contextPath',
  WEB_SOCKET_SERVICE: 'webSocketService'
};

module.exports = Constants;
