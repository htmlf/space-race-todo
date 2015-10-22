/* @wolfram77 */
/* CAMERA - manage camera for scene view */

(function(g) {

	var $ = function(canvas) {
		this.canvas = canvas;
		this.states = [];
		this.state = {
			'pos': [0, 0],
			'ang': 0,
			'scl': 1
		};
	};
	var p = $.prototype;

	// begin (before draw)
	p.begin = function() {
		var c=this.canvas, s=this.state;
		c.save();
		c.clearRect(0, 0, c.elem.width, c.elem.height);
		c.translate(c.elem.width/2, c.elem.height/2);
		c.beginPath();
		c.ellipse(0,0,5,5);
		c.stroke();
		c.scale(s.scl, s.scl);
		c.rotate(-s.ang);
		c.translate(-s.pos[0], -s.pos[1]);
	};

	// end (after draw)
	p.end = function() {
		var c = this.canvas;
		c.restore();
	};

	// translate
	p.translate = function(p) {
		var $v=$math.vector, s=this.state;
		s.pos = $v.add(s.pos, $v.rotate(p, s.ang));
	};

	// rotate
	p.rotate = function(a) {
		this.state.ang += a;
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
	console.log('camera> ready!');
})(this);
