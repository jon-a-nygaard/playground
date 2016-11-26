(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var isNumber = function isNumber(n) {
  return typeof n === 'number' && !isNaN(n);
};
var range = function range(s, e) {
  return Array.from({ length: e - s + 1 }).map(function (_, n) {
    return s + n;
  });
};
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
/**
 * Delete a range of rows from a table
 * @param  {HTMLTableElement} table The table to delete from
 * @param  {Number} start Index of first element to delete
 * @param  {Number} end   Index of last element to delete
 * @return {undefined} No return
 */
var deleteRows = function deleteRows(table, start, end) {
  var s = isNumber(start) ? start : 0;
  var e = isNumber(end) ? end : table.rows.length - 1;
  if (s <= e) {
    var r = range(s, e);
    r.forEach(function (i) {
      return table.deleteRow(s);
    });
  }
};
/**
 * Add a cell to row with a value.
 * Sets classname to 'bg-success' if value is truthy, otherwise 'bg-danger'
 * @param  {HTMLTableRowElement} row The row to insert cell
 * @param  {Boolean} value The value to insert
 * @return {undefined} No return
 */
var addCell = function addCell(row, value) {
  var cell = row.insertCell();
  var content = document.createTextNode('' + value);
  cell.appendChild(content);
  cell.className = value ? 'bg-success' : 'bg-danger';
};
/**
 * Add a row to the table
 * @param  {HTMLTableElement} table The table to delete from
 * @param  {Array} values Array of cell values to add in the row
 * @return {undefined} No return
 */
var addRow = function addRow(table, values) {
  var row = table.insertRow();
  values.forEach(function (v) {
    return addCell(row, v);
  });
};
var removeCondition = function removeCondition(event) {
  var button = event.target;
  var li = button.parentElement.parentElement;
  var ul = li.parentElement;
  ul.removeChild(li);
};
var getCondition = function getCondition(text) {
  var li = document.createElement('li');
  var button = document.createElement('a');
  var icon = document.createElement('span');
  var t = document.createTextNode(text);
  icon.className = 'glyphicon glyphicon-remove';
  button.appendChild(icon);
  button.className = 'remove-condition';
  button.onclick = removeCondition;
  li.appendChild(button);
  li.appendChild(t);
  li.className = 'list-group-item';
  return li;
};
var addNewCondition = function addNewCondition() {
  var list = document.getElementById('conditions');
  var input = document.getElementById('new-condition');
  var condition = getCondition(input.value);
  list.appendChild(condition);
  input.value = '';
};
var test1 = function test1(isNull, stacking, connectNulls) {
  return !(isNull && !stacking && connectNulls);
};
var test2 = function test2(isNull, stacking, connectNulls) {
  return !isNull && stacking && !connectNulls;
};
var runCombinations = function runCombinations() {
  var table = document.getElementById('result');
  var combos = combinations(3);
  deleteRows(table, 1);
  combos.forEach(function (combo) {
    var values = [combo[0], combo[1], combo[2], test1.apply(undefined, combo), test2.apply(undefined, combo)];
    addRow(table, values);
  });
};
var submitButton = document.getElementById('submit');
var addConditionButton = document.getElementById('add-condition');
submitButton.onclick = runCombinations;
addConditionButton.onclick = addNewCondition;

},{}]},{},[1]);
