$(document).ready(function() {
	var skt = io();
	skt.on('msg', function(msg) {
		$('#msg').append('<li>'+msg+'</li>');
	});
	$('#btn').click(function() {
		skt.emit('msg', $('#txt').val());
	});
});
