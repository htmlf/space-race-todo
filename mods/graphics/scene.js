/* @wolfram77 */
/* SCENE - defines a multi-layered scene */

(function(g) {

	var $ = function(v) {
		v = v||{};
		this.ls = new Array(v.nlyr||3); // layers
		for(var i=0, I=this.ls.length; i<I; i++)
			this.ls[i] = [];
	};
	var p = $.prototype;

	// add item to scene
	p.add = function(l, itm) {
		this.ls[l].push(itm);
	};

	// remove
	p.remove = function(l, itm) {
		var lv = this.ls[l];
		for(var i=0, I=lv.length; i<I; i++)
			if(lv[i]===itm) { lv.splice(i, 1); return; }
	};

	// get (in range)
	p.get = function(l, r) {
		var $r = $math.rect, lv=this.ls[l], a=[];
		for(var i=0, I=lv.length; i<I; i++)
			if($r.overlaps(r, lv[i]._rng)) a.push(lv[i]);
		return a;
	};

	// update (in range)
	p.update = function(l ,r) {
		var is = this.get(l, r);
		for(var i=is.length-1; i>=0; i--)
			is[i].update();
	};

	// ready
	if(typeof module!=='undefined') module.exports = $;
	(g.graphics=g.graphics||{}).scene = $;
	console.log('graphics.scene> ready!');
})($$);
