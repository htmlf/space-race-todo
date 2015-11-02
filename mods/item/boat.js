/* @wolfram77 */
/* BOAT - defines a boat (for players) */
(function(g, $o, $v) {

	var $ = function(v) {
		var o = this;
		o.$super(v);
		o.cat = 'boat';
		o.typ = v.typ||0; // type
		o.clr = v.clr||'green'; // color (team)
		o.lif = v.lif||1; // life (max)
		o._lif = o.lif; // temp. life (now)
	};
	$o.inherit($, $$.graphics.item);
	var p = $.prototype;

	// draw boat
	p.draw = function(c, r) {
		var o=this, h=o.hull[o.typ];
		var clf=parseInt(255*o.lif);
		var cvl=parseInt(2*$v.length(o.vel));
		c.save();
		c.translate(o.pos[0], o.pos[1]);
		c.rotate(o.ang);
		c.scale(o.scl[0], o.scl[1]);
		c.fillStyle = o.clr;
		c.path(h.data, h.opt);
		c.fill(); c.stroke();
		c.fillStyle = 'rgb('+(255-clf)+','+clf+',128)';
		c.beginPath();
		c.ellipse(0, -15, 20, 24);
		c.fill(); c.stroke();
		c.fillStyle = 'rgb('+(220+cvl)+','+(220-4*cvl)+',160)';
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
	(g.item=g.item||{}).boat = $;
	console.log('item.boat> ready!');
})($$, $$.type.object, $$.math.vector);
