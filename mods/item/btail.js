/* @wolfram77 */
/* BTAIL - defines a boat tail (in water) */

(function(g, $o, $v) {

	var $ = function(v) {
		var o = this;
		o.$super(v);
		o.thk = v.thk||2;
		o.len = v.len||10;
		o.pth = v.pth||[];
		o.clr = v.clr||'#DDF';
		o._lop = [0];
	};
	$o.inherit($, $$.graphics.item);
	var p = $.prototype;

	// draw
	p.draw = function(c) {
		var o = this;
		c.save();
		c.lineWidth = o.thk;
		c.strokeStyle = o.clr;
		c.path(o.pth, '');
		c.stroke();
		c.restore();
	};

	// update
	p.update = function() {
		var o = this;
		if(++o._lop[0]<4) return;
		o.pth.unshift($v.add(o.pos, [4*Math.random()-2,4*Math.random()-2]));
		if(o.pth.length>o.len) o.pth.length = o.len;
		o._lop[0] = 0;
	};

	// ready
	if(typeof module!=='undefined') module.exports = $;
	(g.item=g.item||{}).btail = $;
	console.log('item.btail> ready!');
})($$, $$.type.object, $$.math.vector);
