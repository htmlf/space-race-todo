var ready = function() {
	var cnv = new $graphics.canvas('canvas');
	var cam = new $graphics.camera({'cnv': cnv});
	var rvr = new $item.river({});
	var bot = new $item.boat({});
	var $v = $math.vector;
	var k = new Array(256);
	console.log(rvr);
	rvr.make({});
	var draw = function() {
		cam.begin();
		rvr.draw(cnv);
		bot.draw(cnv);
		if(k[87]) bot._frc = $v.add(bot._frc, $v.rotate(bot.frc, bot.ang));
		if(k[83]) bot._frc = $v.sub(bot._frc, $v.rotate(bot.frc, bot.ang));
		if(k[65]) bot._trq -= bot.trq;
		if(k[68]) bot._trq += bot.trq;
		bot.update();
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
