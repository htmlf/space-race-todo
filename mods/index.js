$(document).ready(function() {
	var c = new $graphics.canvas('canvas');
	var cm = new $graphics.camera(c);
	var obj = document.getElementById('obj');
	var draw = function() {
		c.ellipse(100, 100, 10, 10);
		c.stroke();
		cm.begin();
		c.translate(150,150);
		c.drawImage(obj, -150,-150);
		cm.end();
		requestAnimationFrame(draw);
	};
	requestAnimationFrame(draw);
	document.onkeypress = function(e) {
		var k = String.fromCharCode(e.keyCode);
		console.log('keycode='+k);
		if(k==='a') cm.translate([-2, 0]);
		else if(k==='d') cm.translate([2, 0]);
		else if(k==='w') cm.translate([0, -2]);
		else if(k==='s') cm.translate([0, 2]);
		else if(k==='q') cm.rotate(-0.02);
		else if(k==='e') cm.rotate(0.02);
	};
});
