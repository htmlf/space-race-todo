/* @wolfram77 */
/* INDEX - main server code */

// required modules
var express = require('express');

// load mods
var $array = require('./mods/type/array');
var $event = require('./mods/type/event');
var $table = require('./mods/type/table');
var $line = require('./mods/math/line');

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
	var l1 = $line.define([0,0], [2,2]);
	var l2 = $line.define([0,2], [2,0]);
	var l1d = $line.distance(l3, [1,0]);
	var l2d = $line.distance(l2, [1,2]);
	var p12 = $line.intersect(l1, l2);
	var l3 = $line.parallel(l1, [2,1]);
	var l4 = $line.perpendicular(l3, [2,1]);
	var p34 = $line.intersect(l3, l4);
	var p56 = $line.intersectRanged([[0,0], [2,2]], [[0,5], [5,0]]);
	console.log('l1=%j, l2=%j', l1, l2);
	console.log('l1d=%d, l2d=%d, p12=%j', l1d, l2d, p12);
	console.log('l3=%j, l4=%j, p34=%j, p56=%j', l3, l4, p34, p56);
});
