/* @wolfram77 */
/* ITEM - defines a drawable item */

(function(g) {

	var $ = function() {
		var o = this;
		o.mas = v.mas||1;
		o.mir = v.mir||1;
		o.lyr = v.lyr||0;
		o.pos = v.pos||[0,0];
		o.scl = v.scl||[1,1];
		o.vel = v.vel||[0,0];
		o.frc = v.frc||[0,0];
		o.ang = v.ang||0;
		o.avl = v.avl||0;
		o.trq = v.trq||0;
		o.rng = v.rng||[0,0,0,0];
		o._rng = null;
	};
	var p = $.prototype;

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
	p.draw = function(r) {
	};

	// ready
	if(typeof module!=='undefined') module.exports = $;
	else (g.$graphics=g.$graphics||{}).item = $;
	console.log('graphics.item> ready!');
})(this);
