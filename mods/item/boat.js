/* @wolfram77 */
/* BOAT - defines a boat (for players) */
(function(g) {

	var $ = function(v) {
		var o = this;
		o._super(v);
		o.lif = v.lif||1; // life (max)
		o._lif = o.lif; // temp. life (now)
	};
	var p = $.prototype;
	var $o = $type.object;
	$o.merge(p, $graphics.item.prototype);

	// super class
	p._super = $graphics.item;

	// draw boat
	p.draw = function(c, r) {
		var o=this, h=o.hull[0];
		c.save();
		c.translate(o.pos[0], o.pos[1]);
		c.rotate(o.ang);
		c.fillStyle = 'green';
		c.path(h.data, h.opt);
		c.fill(); c.stroke();
		c.fillStyle = '#CCE';
		c.ellipse(0, -15, 20, 24);
		c.fill(); c.stroke();
		c.fillStyle = 'red';
		c.path([[-25,0], [25,0], [10,10], [-10,10]], 'c');
		c.fill(); c.stroke();
		c.restore();
	};

	// hull path
	p.hull = [
		{'data': [{'fn': 'arc', 'args': [0,-14,27,0.8*Math.PI,0.2*Math.PI]}], 'opt': ''},
		{'data': [[-25,0], [0,-40], [25,0]], 'opt': 'c'},
		{'data': [[-25,0], [-10,-30], [10,-30], [25,0]], 'opt': 'c'},
		{'data': [[-25,0], [-25,-30], [25,-30], [25,0]], 'opt': 'c'}
	];

	// ready
	if(typeof module!=='undefined') module.exports = $;
	else (g.$item=g.$item||{}).boat = $;
	console.log('item.boat> ready!');
})(this);
