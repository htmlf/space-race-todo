/* @wolfram77 */
/* CAMERA - manage camera for scene view */

(function(g) {

	var $ = function(v) {
		this.canvas = v.canvas;
		var e = this.canvas.elem, vv = v.view || {};
		this.clr = v.clr || 'rgba(0,0,0,0)';
		this.view = new $physics.state({'pos': vv.pos || [0.5*e.width, 0.5*e.height]});
		this.s = v.state || new $physics.state();
		this.states = [];
	};
	var p = $.prototype;

	// begin (before draw)
	p.begin = function() {
		var c=this.canvas, s=this.s;
		c.save();
		c.clearRect(0, 0, c.elem.width, c.elem.height);
		c.translate(c.elem.width/2, c.elem.height/2);
		c.drawImage(this.cam, -100,-100);
		c.scale(s.scl, s.scl);
		c.rotate(-s.ang);
		c.translate(-s.pos[0], -s.pos[1]);
	};

	// end (after draw)
	p.end = function() {
		var c = this.canvas;
		c.restore();
	};

	// save state
	p.save = function() {
		this.states.push(this.state);
	};

	// restore state
	p.restore = function() {
		this.state = this.states.pop();
	};

	// ready
	if(typeof module!=='undefined') module.exports = $;
	else (g.$graphics=g.$graphics||{}).camera = $;
	console.log('graphics.camera> ready!');
})(this);
