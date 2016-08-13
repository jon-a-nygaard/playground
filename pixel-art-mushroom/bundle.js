(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var lines = [['6xgray', '4xorange', '6xgray'], ['5xgray', '6xorange', '5xgray'], ['4xgray', '8xorange', '4xgray'], ['3xgray', '10xorange', '3xgray'], ['2xgray', '1xorange', '2xblack', '6xorange', '2xblack', '1xorange', '2xgray'], ['1xgray', '3xorange', '1xwhite', '1xblack', '4xorange', '1xblack', '1xwhite', '3xorange', '1xgray'], ['1xgray', '3xorange', '1xwhite', '6xblack', '1xwhite', '3xorange', '1xgray'], ['4xorange', '1xwhite', '1xblack', '1xwhite', '2xorange', '1xwhite', '1xblack', '1xwhite', '4xorange'], ['4xorange', '3xwhite', '2xorange', '3xwhite', '4xorange'], ['16xorange'], ['1xgray', '4xorange', '6xwhite', '4xorange', '1xgray'], ['4xgray', '8xwhite', '4xgray'], ['2xgray', '2xblack', '8xwhite', '4xgray'], ['1xgray', '5xblack', '5xwhite', '2xblack', '3xgray'], ['1xgray', '6xblack', '3xwhite', '3xblack', '3xgray'], ['2xgray', '5xblack', '2xgray', '3xblack', '4xgray']].reverse();
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
