/* @wolfram77 */
/* ITEM - defines a drawable item */

(function(g, $v, $r) {

	var $ = function(v) {
		var o = this;
		o.scn = v.scn; // scene
		o.cat = v.cat; // category
		o.stt = v.stt||0; // state
		o.mas = v.mas||1; // mass
		o.mir = v.mir||1; // moment of inertia
		o.lyr = v.lyr||0; // layer
		o.pos = v.pos||[0,0]; // position
		o.scl = v.scl||[1,1]; // scale
		o.vel = v.vel||[0,0]; // velocity
		o.frc = v.frc||[0,-0.1]; // force
		o.ang = v.ang||0; // angle
		o.avl = v.avl||0; // angular velocity
		o.trq = v.trq||0.0005; // torque
		o.dfc = v.dfc||0.01; // drag force coeff.
		o.dtq = v.dtq||0.04; // drag torque coeff.
		o.rng = v.rng||[0,0,0,0]; // range
		o._rng = null; // temp. range
	};
	var p = $.prototype;

	// translate
	p.translate = function(p) {
		var o=this;
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

	// updates collision
	p.collision = function() {
		var o=this, is=o.scn.get(o.lyr, o._rng);
	};

	// updates motion
	p.motion = function() {
		var o = this, vol=Math.sqrt(o.mas);
		o.frc[0] -= o.dfc*vol*o.vel[0]; o.frc[1] -= o.dfc*vol*o.vel[1];
		o.vel[0] += o.frc[0]/o.mas; o.vel[1] += o.frc[1]/o.mas;
		o.pos[0] += o.vel[0]; o.pos[1] += o.vel[1];
		o.trq -= o.dtq*vol*o.avl;
		o.avl += o.trq/o.mir; o.ang += o.avl;
		o.frc = [0,0]; o.trq = 0;
		o._rng = $r.translate(o.rng, o.pos);
	};

	// update (all)
	p.update = function() {
		this.motion();
	};

	// draw (empty)
	p.draw = function(c, r) {
	};

	// ready
	if(typeof module!=='undefined') module.exports = $;
	(g.graphics=g.graphics||{}).item = $;
	console.log('graphics.item> ready!');
})($$, $$.math.vector, $$.math.rect);
