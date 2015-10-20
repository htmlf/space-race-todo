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
	res.sendFile(__dirname+'/mods/index.html');
});
app.use(express.static(__dirname+'/mods'));


// ws interface
io.on('connection', function(skt) {
	console.log('a user connected on web socket');
	skt.on('msg', function(msg) {
		console.log('msg: '+msg);
		io.emit('msg', msg);
	});
	skt.on('disconnect', function() {
		console.log('user disconnected');
	});
});


// ready
server.listen(80, function() {
	console.log('miver>> ready!');
});
