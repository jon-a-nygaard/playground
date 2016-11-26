'use strict'
const isNumber = n => typeof n === 'number' && !isNaN(n)
const range = (s, e) => Array.from({ length: e - s + 1 }).map((_, n) => s + n)
const combinations = (n) => {
  let r = []
  for (let i = 0; i < (1 << n); i++) {
    let c = []
    for (let j = 0; j < n; j++) {
      c.push(!!(i & (1 << j)))
    }
    r.push(c)
  }
  return r
}
/**
 * Delete a range of rows from a table
 * @param  {HTMLTableElement} table The table to delete from
 * @param  {Number} start Index of first element to delete
 * @param  {Number} end   Index of last element to delete
 * @return {undefined} No return
 */
const deleteRows = (table, start, end) => {
  const s = isNumber(start) ? start : 0
  const e = isNumber(end) ? end : table.rows.length - 1
  if (s <= e) {
    const r = range(s, e)
    r.forEach(i => table.deleteRow(s))
  }
}
/**
 * Add a cell to row with a value.
 * Sets classname to 'bg-success' if value is truthy, otherwise 'bg-danger'
 * @param  {HTMLTableRowElement} row The row to insert cell
 * @param  {Boolean} value The value to insert
 * @return {undefined} No return
 */
const addCell = (row, value) => {
  const cell = row.insertCell()
  const content = document.createTextNode('' + value)
  cell.appendChild(content)
  cell.className = (value ? 'bg-success' : 'bg-danger')
}
/**
 * Add a row to the table
 * @param  {HTMLTableElement} table The table to delete from
 * @param  {Array} values Array of cell values to add in the row
 * @return {undefined} No return
 */
const addRow = (table, values) => {
    const row = table.insertRow()
    values.forEach(v => addCell(row, v))
}
const test1 = (isNull, stacking, connectNulls) => !(isNull && !stacking && connectNulls)
const test2 = (isNull, stacking, connectNulls) => !isNull && stacking && !connectNulls
const runCombinations = () => {
  const table = document.getElementById('result')
  const combos = combinations(3)
  deleteRows(table, 1)
  combos.forEach(combo => {
    const values = [combo[0], combo[1], combo[2], test1.apply(this, combo), test2.apply(this, combo)]
    addRow(table, values);
  })
}
const button = document.getElementById('submit')
button.onclick = runCombinations
