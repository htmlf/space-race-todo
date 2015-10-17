/* @wolfram77 */
/* INDEX - main server code */

// required modules
var express = require('express');

// load mods
var $array = require('./mods/type/array');
var $event = require('./mods/type/event');

// init express
var app = express();


// url interface
app.all('/', function(req, res) {
	res.sendFile(__dirname+'/assets/index.html');
});
app.use(express.static(__dirname+'/assets'));


// ready
var server = app.listen(80, function() {
	console.log('miver>> ready!');
	var e = new $event();
	e.on('test', function() { console.log('test'); });
	e.is('test');
	console.log(e);
});
