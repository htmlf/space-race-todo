$(document).ready(function() {
	var skt = io();
	skt.on('msg', function(msg) {
		$('#msg').append('<div>'+msg+'</div>');
	});
	$('#btn').click(function() {
		skt.emit('msg', $('#txt').val());
	});
});
