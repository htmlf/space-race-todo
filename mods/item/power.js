/* @wolfram77 */
/* POWER - defines a power (collectible) */

(function(g) {

	var $ = function(v) {
		var o = new $graphics.item(v);
		o.clr = v.clr||'#DDF'; // color
		o.prototype.merge($.prototype);
		return o;
	};
	var p = $.prototype;

	// draw
	p.draw = function(c, l, r) {
		c.strokeStyle = o.clr;
		c.lineWidth = o.lwd;
		c.beginPath();
		c.ellipse(o.pos[0], o.pos[1], o.r, o.r);
		c.stroke();
	};

	// update
	p.update = function() {

	};
})(this);
