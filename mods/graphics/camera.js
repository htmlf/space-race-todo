/* @wolfram77 */
/* CAMERA - manage camera for scene view */

(function(g) {

	var $ = function(v) {
		var o = new $graphics.item(v);
		var e = v.cnv.elem;
		o.cnv = v.cnv;
		o.scn = v.scn;
		o.kep = v.kep||false;
		o.clr = v.clr||'rgba(0,0,0,0)';
		o.viw = v.viw||[0.5*e.width, 0.5*e.height];
		o.prototype.merge($.prototype);
		return o;
	};
	var p = $.prototype;

	// begin (before draw)
	p.begin = function() {
		var o=this, c=o.cnv, e=c.elem;
		c.save();
		c.fillStyle = o.clr;
		if(c.kep) c.fillRect(0, 0, e.width, e.height);
		else c.clearRect(0, 0, e.width, e.height);
		c.translate(o.viw[0], o.viw[1]);
		c.scale(o.scl[0], o.scl[1]);
		c.rotate(-o.ang);
		c.translate(-o.pos[0], -o.pos[1]);
	};

	// end (after draw)
	p.end = function() {
		var c = this.cnv;
		c.restore();
	};

	// draw camera view
	p.draw = function() {
		var o = this;
		o.begin();
		for(var l=o.scn.ls.length-1; l>=0; l--) {
			var is = o.scn.get(l, o._rng);
			for(var i=is.length-1; i>=0; i--)
				is[i].draw();
		}
		o.end();
	};

	// ready
	if(typeof module!=='undefined') module.exports = $;
	else (g.$graphics=g.$graphics||{}).camera = $;
	console.log('graphics.camera> ready!');
})(this);
