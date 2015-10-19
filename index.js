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
	console.log(v);
});
