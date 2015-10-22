/* @wolfram77 */
/* INDEX - main server code */

// required modules
var http = require('http');
var express = require('express');
var socketio = require('socket.io');

// load mods
var $array = require('./mods/type/array');
var $event = require('./mods/type/event');
var $table = require('./mods/type/table');
var $line = require('./mods/math/line');
var $random = require('./mods/math/random');
var $vector = require('./mods/math/vector');
var $serial = require('./mods/code/serial');

// init server
var app = express();
var server = http.createServer(app);
var io = socketio(server);


// http interface
app.all('/', function(req, res) {
	res.sendFile(__dirname+'/assets/index.html');
});
app.use('/mods', express.static(__dirname+'/mods'));
app.use('/', express.static(__dirname+'/assets'));


// ready
server.listen(80, function() {
	console.log('miver>> ready!');
});
