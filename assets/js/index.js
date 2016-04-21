window.$$ = {}; // modules container

// on document ready
var ready = function() {
	var cnv = new $$.graphics.canvas('canvas'), e = cnv.elem;
	var cam = new $$.graphics.camera({'cnv': cnv, 'viw': [0.5*e.width, 0.5*e.height]});
	var rvr = new $$.item.river({});
	var bot = new $$.item.boat({'typ': 1, 'scl': [2,2]});
	var btl = new $$.item.btail({'pos': bot.pos});
	var $v = $$.math.vector;
	var k = new Array(256);
	rvr.make({});
	var draw = function() {
		cam.begin();
		rvr.draw(cnv);
		btl.draw(cnv);
		bot.draw(cnv);
		if(k[87]) bot.frc = $v.add(bot.frc, $v.rotate([0,-0.1], bot.ang));
		if(k[83]) bot.frc = $v.sub(bot.frc, $v.rotate([0,-0.1], bot.ang));
		if(k[65]) bot.trq -= 0.001;
		if(k[68]) bot.trq += 0.001;
		if(k[66]) bot.lif-=0.001;
		bot.update();
		btl.pos = bot.pos;
		btl.update();
		cam.end();
		cam.pos = bot.pos;
		cam.ang = bot.ang;
		requestAnimationFrame(draw);
	};
	requestAnimationFrame(draw);
	document.onkeydown = function(e) {
		k[e.keyCode] = true;
	};
	document.onkeyup = function(e) {
		k[e.keyCode] = false;
	};
};
$(document).ready(ready);
