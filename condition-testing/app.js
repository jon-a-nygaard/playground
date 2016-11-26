'use strict'
const button = document.getElementById('submit')
const table = document.getElementById('result')
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
const test1 = (isNull, stacking, connectNulls) => !(isNull && !stacking && connectNulls)
const test2 = (isNull, stacking, connectNulls) => !isNull && stacking && !connectNulls
const runCombinations = () => {
  const combos = combinations(3)
  console.log(combos)
  combos.forEach(combo => {
    const row = table.insertRow()
    const values = [combo[0], combo[1], combo[2], test1.apply(this, combo), test2.apply(this, combo)]
    values.forEach(v => {
      const cell = row.insertCell()
      const content = document.createTextNode('' + v)
      cell.appendChild(content)
      cell.className = (v ? 'bg-success' : 'bg-danger')
    })
  })
}
button.onclick = runCombinations
