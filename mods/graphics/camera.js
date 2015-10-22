/* @wolfram77 */
/* CAMERA - manage camera for scene view */

var $graphics = $graphics || {};
var $graphics.camera = function($canvas) {
	this.$canvas = $canvas;
	this.states = [];
	this.pos = [0, 0];
	this.ang = 0;
	this.scl = 1;
};
(function(o) {

	// begin (before draw)
	this.begin = function() {
		var $c = this.$canvas;
		$c.save();
		$c.clearRect(0, 0, $c.element.width, $c.element.height);
		$c.scale(this.scl);
		$c.rotate(this.ang);
		$c.translate(-this.pos[0], -this.pos[1]);
	};

	// end (after draw)
	o.end = function() {
		var $c = this.$canvas;
		$c.restore();
	};

	// translate
	o.translate = function(p) {
		var $v = $math.vector;
		this.pos = $v.add(this.pos, $v.rotate(p, this.ang));
	};

	// rotate
	o.rotate = function(a) {
		this.ang += a;
	};


	// save state
	o.save = function() {
		this.states.push({'pos': this.pos. 'ang': this.ang, 'scl': this.scl});
	};

	// restore state
	o.restore = function() {
		var s = this.states.pop();
		this.pos = s.pos;
		this.ang = s.ang;
		this.scl = s.scl;
	};
})($graphics.camera.prototype);
