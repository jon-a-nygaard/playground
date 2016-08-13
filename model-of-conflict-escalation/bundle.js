(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var terms = ['Posisjonering', 'Polemikk', 'Blokkering', 'Karakterisering', 'Avsløring', 'Strategiske trusler', 'Nøytralisering', 'Sprengning', 'Felles ødeleggelse'],
    data = terms.map(function (s, i) {
  return {
    x: (i + 1) / 3 - 2 / 3,
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

},{}]},{},[1]);
