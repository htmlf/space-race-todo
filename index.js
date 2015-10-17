/* @wolfram77 */
/* INDEX - main server code */

// required modules
var express = require('express');

// load mods
var $array = require('./mods/type/array');

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
	var a = new $array(10);
	a.fill(2);
	console.log(a);
});
