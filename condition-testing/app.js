var combinations = function(n) {
    var r = [];
    for (var i = 0; i < (1 << n); i++) {
      var c = [];
      for (var j = 0; j < n; j++) {
        c.push(i & (1 << j) ? true : false);
      }
      r.push(c);
    }
    return r;
  },
  test1 = function(isNull, stacking, connectNulls) {
    return !(isNull && !stacking && connectNulls);
  },
  test2 = function(isNull, stacking, connectNulls) {
    return !isNull && stacking && !connectNulls;
  },
  table = document.getElementById('result'),
  combos = combinations(3);
combos.forEach(function(combo) {
	var row = table.insertRow();
  var values = [combo[0], combo[1], combo[2], test1.apply(this, combo), test2.apply(this, combo)];
  values.forEach(function (v) {
  	var cell = row.insertCell();
    var content = document.createTextNode('' + v)
    cell.appendChild(content);
    cell.className = (v ? 'bg-success' : 'bg-danger')
  })
})
