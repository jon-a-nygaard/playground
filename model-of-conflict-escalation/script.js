var terms = ['Posisjonering', 'Polemikk', 'Blokkering', 'Karakterisering', 'Avsløring', 'Strategiske trusler', 'Nøytralisering', 'Sprengning', 'Felles ødeleggelse'],
  data = terms.map(function(s, i) {
    return {
      x: ((i + 1) / 3) - (2 / 3),
      y: i,
      name: s,
      color: '#' + (i + 7).toString(16) + (9 - i).toString(16) + '0'
    };
  });
Highcharts.chart('container', {
  chart: {
    type: 'heatmap'
  },
  title: {
    text: 'Stadier i konfliktutvikling',
    align: 'left',
    useHTML: true,
    style: {
      borderBottom: '5px solid black'
    }
  },
  subtitle: {
    text: 'etter Friedrich Glasl',
    align: 'left'
  },
  xAxis: [{
    categories: ['Oppnå noe', 'Vinne', 'Skade'],
    min: 0,
    max: 2,
    labels: {
      style: {
        fontWeight: 'bold'
      }
    }
  }, {
    opposite: true,
    categories: ['Irritasjon', 'Uvennskap', 'Fiendskap'],
    min: 0,
    max: 2,
    labels: {
      style: {
        fontWeight: 'bold'
      }
    }
  }],
  yAxis: {
    gridLineWidth: 0,
    labels: {
      enabled: false
    },
    title: null
  },
  legend: {
    enabled: false
  },
  series: [{
  	borderWidth: 1,
    colsize: 0.33,
    data: data,
    //colorByPoint: true,
    dataLabels: {
      enabled: true,
      format: '{point.name}'
    },
    tooltip: {
      headerFormat: '',
      pointFormat: '{point.name}'
    }
  }, {
    xAxis: 1 // @notice Can this dummy series be avoided somehow?
  }]
});
