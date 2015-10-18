var $table = $type.table;
var cwd = {'name': ['a', 'b'], 'age': [1, 2]};
console.log('cwd', cwd);
console.log('cols', $table.cols(cwd), 'rows', $table.rows(cwd));
var rwd = $table.rowwise(cwd);
console.log('rwd', rwd);
console.log('cols', $table.cols(rwd), 'rows', $table.rows(rwd));
cwd = $table.colwise(rwd);
console.log('cwd', cwd);
