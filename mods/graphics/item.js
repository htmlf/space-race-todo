/* @wolfram77 */
/* ITEM - defines a drawable item */

(function(g) {

	var $ = function() {
		var o = this;
		o.stt = v.stt||0; // state
		o.lop = v.lop||0; // loop
		o.mas = v.mas||1; // mass
		o.mir = v.mir||1; // moment of inertia
		o.lyr = v.lyr||0; // layer
		o.pos = v.pos||[0,0]; // position
		o.scl = v.scl||[1,1]; // scale
		o.vel = v.vel||[0,0]; // velocity
		o.frc = v.frc||[0,0]; // force
		o.ang = v.ang||0; // angle
		o.avl = v.avl||0; // angular velocity
		o.trq = v.trq||0; // torque
		o.rng = v.rng||[0,0,0,0]; // range
		o._rng = null; // temp. range
	};
	var p = $.prototype;

	// translate
	p.translate = function(p) {
		var o=this, $v=$math.vector;
		o.pos = $v.add(o.pos, $v.rotate(p, o.ang));
	};

	// rotate
	p.rotate = function(a) {
		this.ang += a;
	};

	// scale
	p.scale = function(s) {
		this.scl[0] *= s[0];
		this.scl[1] *= s[1];
	};

	// update status
	p.update = function() {
		var o = this, $r = $math.rect;
		o.vel[0] += o.frc[0]/o.mas; o.vel[1] += o.frc[1]/o.mas;
		o.pos[0] += o.vel[0]; o.pos[1] += o.vel[0];
		o.avl += o.trq/o.mir;	o.ang += o.avl;
		o.ang = $v.add(o.ang, $v.scale(o.avl, o.tdel));
		o._rng = $r.translate(o.rng, o.pos);
		o.frc = [0,0]; o.trq = [0,0];
	};

	// draw (empty)
	p.draw = function(c, r) {
	};

	// ready
	if(typeof module!=='undefined') module.exports = $;
	else (g.$graphics=g.$graphics||{}).item = $;
	console.log('graphics.item> ready!');
})(this);
