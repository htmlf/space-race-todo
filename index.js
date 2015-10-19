/* @wolfram77 */
/* INDEX - main server code */

// required modules
var express = require('express');

// load mods
var $array = require('./mods/type/array');
var $event = require('./mods/type/event');
var $table = require('./mods/type/table');
var $line = require('./mods/math/line');
var $random = require('./mods/math/random');
var $vector = require('./mods/math/vector');

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
	var v = $vector.define([0,0], [1,1]);
	var vp = $vector.toPolar(v);
	var vc = $vector.toCartesian(vp);
	var vl = $vector.length(v);
	var va = $vector.angle(v);
	var v1 = $vector.add(v, [1,1]);
	var v2 = $vector.sub(v1, [1,1]);
	var vdt = $vector.dot(v, [1,0]);
	var vcs = $vector.cross(v, [1,0]);
	var vrt = $vector.rotate(v, Math.PI/4);
	var vsl = $vector.scale(v, 2);
	console.log('v=%j, vl=%d, va=%d', v, vl, va);
	console.log('vp=%j, vc=%j', vp, vc);
	console.log('v1=%j, v2=%j', v1, v2);
	console.log('vdt=%d, vcs=%d', vdt, vcs);
	console.log('vrt=%j, vsl=%j', vrt, vsl);
});
