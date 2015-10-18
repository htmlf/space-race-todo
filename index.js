/* @wolfram77 */
/* INDEX - main server code */

// required modules
var express = require('express');

// load mods
var $array = require('./mods/type/array');
var $event = require('./mods/type/event');
var $table = require('./mods/type/table');

// init express
var app = express();


// url interface
app.all('/', function(req, res) {
	res.sendFile(__dirname+'/mods/index.html');
});
app.use(express.static(__dirname+'/mods'));


// ready
var server = app.listen(80, function() {
	console.log('miver>> ready!');
	var cwd = {'name': ['a', 'b'], 'age': [1, 2]};
	console.log('cwd=%j', cwd);
	console.log('cols=%j, rows=%d', $table.cols(cwd), $table.rows(cwd));
	var rwd = $table.rowwise(cwd);
	console.log('rwd=%j', rwd);
	console.log('cols=%j, rows=%d', $table.cols(rwd), $table.rows(rwd));
	cwd = $table.colwise(rwd);
	console.log('cwd=%j', cwd);
});
