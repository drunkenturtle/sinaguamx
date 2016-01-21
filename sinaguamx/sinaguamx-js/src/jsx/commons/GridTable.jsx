'use strict';

var React = require('react');

var GridTable = React.createClass({
  getInitialState: function() {
    return {
      pagina: 0,
      resultPerPagina: 10,
      arrOrg: this.props.arrOrg,
      arrPag: undefined,
      headers: this.props.headers,
      objProps: this.props.objProps
    };
  },
  componentDidMount: function() {
  },
  getDefaultProps: function() {
    return {
      arrOrg: undefined,
      objProps: undefined,
      headers: undefined
    };
  },
  componentWillMount: function() {
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
  setArrOrg: function(arrOrg) {
    var arrPag = undefined;

    if(arrOrg != undefined) {
      arrPag = this.getPaginado(arrOrg, this.state.resultPerPagina)
    }

    this.setState({
      pagina: 0,
      arrOrg: arrOrg,
      arrPag: arrPag
    });
  },
  getPaginado: function(arrOrg, resultPerPagina) {
    var paginado = undefined;
    var pagina = undefined;
    var i = 0;  //contador de objectos por pagina
    var self = this;

    if(arrOrg != undefined && arrOrg.length > 0) {
      paginado = [];
      pagina = [];

      arrOrg.forEach(function(obj, index) {
        pagina.push(obj);

        if(i < resultPerPagina) {
          i++
        }

        if(i == resultPerPagina || index == (arrOrg.length - 1)) {
          paginado.push(pagina);
          pagina = [];
          i = 0;
        }
      });
    }

    return paginado;
  },
  onClickNextPage: function(evt) {
    evt.preventDefault();
    var nextPage = 0;

    if(this.state.arrPag != undefined) {
      nextPage = (this.state.pagina + 1);

      if(nextPage <= (this.state.arrPag.length - 1) ) {
        this.setState({
          pagina: nextPage
        });
      }
    }
  },
  onClickBackPage: function(evt) {
    evt.preventDefault();
    var backPage = 0;
    var firstPage = 0;

    if(this.state.arrPag != undefined) {
      backPage = (this.state.pagina - 1);

      if(backPage >= firstPage) {
        this.setState({
          pagina: backPage
        });
      }
    }
  },
  onClickFirstPage: function(evt) {
    evt.preventDefault();
    var firstPage = 0;

    if(this.state.arrPag != undefined) {
      if(firstPage != this.state.pagina) {
        this.setState({
          pagina: firstPage
        });
      }
    }
  },
  onClickLastPage: function(evt) {
    evt.preventDefault();
    var lastPage = 0;

    if(this.state.arrPag != undefined) {
      lastPage = (this.state.arrPag.length - 1);

      if(lastPage != this.state.pagina) {
        this.setState({
          pagina: lastPage
        });
      }
    }
  },
  onChangeResultPerPagina: function(evt) {
    if(this.state.arrOrg != undefined) {
      this.setState({
        pagina: 0,
        resultPerPagina: evt.target.value,
        arrPag: this.getPaginado(this.state.arrOrg, evt.target.value)
      });
    }
  },
  render: function() {
    var self = this;
    var bodyObjs = [];
    var headers = [];
    var totalPaginado = '0 de 0 Páginas';
    //construir objetos
    if(this.state.arrPag != undefined && this.state.objProps != undefined) {
      var tds = undefined;

      totalPaginado = ((this.state.pagina + 1) + ' de ' +  this.state.arrPag.length + ' Páginas')
      this.state.arrPag[this.state.pagina].forEach(function(obj, index) {
        tds = [];

        self.state.objProps.forEach(function(objProp) {
          tds.push(
            <td>{obj[objProp]}</td>
          );
        });

        bodyObjs.push(
          <tr>
            {tds}
          </tr>
        );
      });
    }

    if(this.state.headers != undefined) {
      var ths = [];

      this.state.headers.forEach(function(head) {
        ths.push(<th>{head}</th>);
      });

      headers.push(
        <thead>
          <tr>
            {ths}
          </tr>
        </thead>
      );
    }

    return (
      <table className='tablesorter' cellSpacing='0'>
        {headers}
        <tbody>
          {bodyObjs}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan='100%'>
              <div className='pag'>
                <select id='soflow-color' value={this.state.resultPerPagina} onChange={this.onChangeResultPerPagina}>
                  <option value='5'>5</option>
                  <option value='10'>10</option>
                  <option value='15'>15</option>
                  <option value='20'>20</option>
                  <option value='25'>25</option>
                </select>
                <ul className='pagination'>
                  <li className='previous'><a href='#' onClick={this.onClickFirstPage}>&lt;&lt; Primero</a></li>
                  <li className='previous'><a href='#' onClick={this.onClickBackPage}>&lt; Anterior</a></li>
                  <li className='active'>{totalPaginado}</li>
                  <li className='next'><a href='#' onClick={this.onClickNextPage}>Siguiente &gt;</a></li>
                  <li className='next'><a href='#' onClick={this.onClickLastPage}>Último &gt;&gt;</a></li>
                </ul>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }
});

module.exports = GridTable;
