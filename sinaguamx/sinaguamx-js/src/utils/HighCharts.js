"use strict";

var HighCharts = {
  basicPie: function(containerId, series, options, extraOptions) {
    var title = (options ? options.title : '');
    var subTitle = (options ? options.subTitle : '');
    var showInLegend = (options ? options.showInLegend : true);
    var showInLegendSerie = (options ? options.showInLegendSerie : true);

    var pieChart = new Highcharts.Chart({
      chart: {
        renderTo: containerId,
        type: 'pie',
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
      title: {
        text: title
      },
      subtitle: {
        text: subTitle
      },
      tooltip: {
        formatter: function () {
          var formatResult = '';
          formatResult = (this.y + ' ; ' + this.percentage.toFixed(2) + ' %');
          //this.point.extraOptions.extraValue 
          return formatResult;
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: ('{point.name}')
          },
          showInLegend: showInLegend,
          animation: false
        },
        series: {
          dataLabels: {
            enabled: showInLegendSerie,
            format: ('{point.y} ; {point.percentage:.1f}%')
          }
        }
      },
      series: [{
        type: 'pie',
        name: 'Registros: ',
        data: series
      }]
    });

    return pieChart;
  },
  basicBar: function(containerId, series, categories, options, extraOptions) {
    var title = (options ? options.title : '');
    var subTitle = (options ? options.subTitle : '');
    var showInLegend = (options ? options.showInLegend : true);
    var showInLegendSerie = (options ? options.showInLegendSerie : true);

    var barChart = new Highcharts.Chart({
      chart: {
        renderTo: containerId,
        type: 'column',
        animation: false
      },
      title: {
        text: title
      },
      subtitle: {
        text: subTitle
      },
      xAxis: {
        categories: categories,
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Cantidad'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="padding:0">{series.name}: </td>' +
                      '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        },
        bar: {
          animation: false
        }
      },
      series: series
    });

    return barChart;
  }
};

module.exports = HighCharts;