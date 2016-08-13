(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var lines = [['3xwhite', '6xyellow', '3xwhite'], ['2xwhite', '3xyellow', '2xgray', '3xyellow', '2xwhite'], ['1xwhite', '3xyellow', '1xgray', '2xwhite', '1xgray', '3xyellow', '1xwhite'], ['1xwhite', '2xblack', '1xgray', '1xwhite', '2xblack', '1xwhite', '1xgray', '2xblack', '1xwhite'], ['1xwhite', '2xblack', '1xgray', '1xwhite', '2xblack', '1xwhite', '1xgray', '2xblack', '1xwhite'], ['1xwhite', '3xyellow', '1xgray', '2xwhite', '1xgray', '3xyellow', '1xwhite'], ['1xwhite', '4xyellow', '2xgray', '4xyellow', '1xwhite'], ['1xwhite', '2xyellow', '1xblack', '4xyellow', '1xblack', '2xyellow', '1xwhite'], ['1xwhite', '3xyellow', '4xblack', '3xyellow', '1xwhite'], ['1xwhite', '1xblue', '8xyellow', '1xblue', '1xwhite'], ['1xwhite', '1xyellow', '1xblue', '6xyellow', '1xblue', '1xyellow', '1xwhite'], ['1xwhite', '2xyellow', '6xblue', '2xyellow', '1xwhite'], ['1xwhite', '2xyellow', '6xblue', '2xyellow', '1xwhite'], ['1xwhite', '1xyellow', '8xblue', '1xyellow', '1xwhite'], ['1xwhite', '1xyellow', '8xblue', '1xyellow', '1xwhite'], ['1xwhite', '1xblack', '8xblue', '1xblack', '1xwhite'], ['2xblack', '1xwhite', '2xblack', '2xwhite', '2xblack', '1xwhite', '2xblack'], ['2xwhite', '3xblack', '2xwhite', '3xblack', '2xwhite']].reverse();
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
