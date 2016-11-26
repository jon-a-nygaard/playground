(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var button = document.getElementById('submit');
var table = document.getElementById('result');
var combinations = function combinations(n) {
  var r = [];
  for (var i = 0; i < 1 << n; i++) {
    var c = [];
    for (var j = 0; j < n; j++) {
      c.push(!!(i & 1 << j));
    }
    r.push(c);
  }
  return r;
};
var test1 = function test1(isNull, stacking, connectNulls) {
  return !(isNull && !stacking && connectNulls);
};
var test2 = function test2(isNull, stacking, connectNulls) {
  return !isNull && stacking && !connectNulls;
};
var runCombinations = function runCombinations() {
  var combos = combinations(3);
  console.log(combos);
  combos.forEach(function (combo) {
    var row = table.insertRow();
    var values = [combo[0], combo[1], combo[2], test1.apply(undefined, combo), test2.apply(undefined, combo)];
    values.forEach(function (v) {
      var cell = row.insertCell();
      var content = document.createTextNode('' + v);
      cell.appendChild(content);
      cell.className = v ? 'bg-success' : 'bg-danger';
    });
  });
};
button.onclick = runCombinations;

},{}]},{},[1]);
