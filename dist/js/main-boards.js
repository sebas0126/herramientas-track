(function() {
  this.barGrap = function() {
    return Highcharts.chart('container', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: ''
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      colors: ['#D11920', '#F15A24', '#FFBD0F', '#9CD125'],
      series: [
        {
          name: 'Porcentaje',
          colorByPoint: true,
          data: [
            {
              name: 'Sobrecumple',
              y: 60
            }, {
              name: 'Cumple',
              y: 30
            }, {
              name: 'No Cumple',
              y: 20
            }, {
              name: 'No Aplica',
              y: 20
            }
          ]
        }
      ]
    });
  };

  this.funcionGrphits = function(j) {
    return Highcharts.chart('containerBar' + j, {
      chart: {
        type: 'column'
      },
      title: {
        text: ' Distribuidor' + j
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        title: {
          text: ''
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y:.1f}%'
          }
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> en total<br/>'
      },
      colors: ['#D11920', '#F15A24', '#FFBD0F', '#9CD125'],
      series: [
        {
          name: 'Brands',
          colorByPoint: true,
          data: [
            {
              name: 'Sobrecumple',
              y: 56.33,
              drilldown: 'Sobrecumple'
            }, {
              name: 'Cumple',
              y: 24.03,
              drilldown: 'Cumple'
            }, {
              name: 'No Cumple',
              y: 10.38,
              drilldown: 'No Cumple'
            }, {
              name: 'No Aplica',
              y: 10.38,
              drilldown: 'No Aplica'
            }
          ]
        }
      ]
    });
  };

  this.functionCont = function(t) {
    var i, includeHtml;
    i = 0;
    includeHtml = "";
    while (i < t) {
      $('#containerBar').append("<div id='containerBar" + i + "' class='col-md-3' style='min-width: 310px; height: 400px; max-width: 600px; margin: 0 auto'></div>");
      funcionGrphits(i);
      i++;
    }
  };

}).call(this);

