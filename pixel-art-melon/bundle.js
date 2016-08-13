(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var lines = [['15xwhite'], ['10xwhite', '1xolive', '1xgreen', '3xwhite'], ['9xwhite', '1xred', '1xpink', '1xolive', '1xdarkgreen', '2xwhite'], ['8xwhite', '2xred', '2xpink', '1xolive', '1xdarkgreen', '1xwhite'], ['7xwhite', '2xred', '1xblack', '1xred', '1xpink', '1xolive', '1xdarkgreen', '1xwhite'], ['6xwhite', '5xred', '1xpink', '1xolive', '1xdarkgreen', '1xwhite'], ['5xwhite', '3xred', '1xblack', '2xred', '1xpink', '1xolive', '1xdarkgreen', '1xwhite'], ['4xwhite', '7xred', '1xpink', '1xolive', '1xdarkgreen', '1xwhite'], ['3xwhite', '3xred', '1xblack', '3xred', '2xpink', '1xolive', '1xdarkgreen', '1xwhite'], ['2xwhite', '2xred', '1xblack', '5xred', '1xpink', '1xolive', '1xdarkgreen', '2xwhite'], ['1xwhite', '1xolive', '2xpink', '4xred', '2xpink', '1xolive', '2xdarkgreen', '2xwhite'], ['1xwhite', '1xdarkgreen', '1xolive', '6xpink', '1xolive', '2xdarkgreen', '3xwhite'], ['2xwhite', '1xdarkgreen', '6xolive', '2xdarkgreen', '4xwhite'], ['4xwhite', '5xdarkgreen', '6xwhite'], ['15xwhite']].reverse();
var data = lines.reduce(function (data, line, i) {
  var pixels = line.reduce(function (pixels, e) {
    var _e$split = e.split('x');

    var _e$split2 = _slicedToArray(_e$split, 2);

    var n = _e$split2[0];
    var c = _e$split2[1];

    var additional = Array.from({
      length: n
    }, function (v, k) {
      return {
        x: k + pixels.length,
        y: i,
        color: c
      };
    });
    return pixels.concat(additional);
  }, []);
  return data.concat(pixels);
}, []);

Highcharts.chart('container', {
  chart: {
    type: 'heatmap'

  },
  title: {
    text: 'Highcharts Pixel Art'
  },
  plotOptions: {
    heatmap: {
      borderColor: 'black',
      borderWidth: 1
    }
  },
  legend: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xAxis: {
    labels: {
      enabled: false
    },
    lineWidth: 0,
    tickWidth: 0
  },
  yAxis: {
    title: null,
    labels: {
      enabled: false
    }
  },
  series: [{
    data: data
  }]
});

},{}]},{},[1]);
