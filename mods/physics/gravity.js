/* @wolfram77 */
/* GRAVITY - emulates gravity effect */

(function(g) {

	var $ = function(v) {
		// factor
		this.k = v.k || 1;
		this.intg = v.intg || [];
		this.extg = v.extg || [];
	};
	var p = $.prototype;

	// update (run step)
	p.update = function() {
		var k=this.k, ig=this.intg, eg=this.extg;
		var i, j, a, b, I=ig.length, J=eg.length;
		for(i=0; i<I; i++) {
			for(j=i+1; j<I; j++)
				this._calc(ig[i], ig[j]);
			for(j=0; j<J; j++)
				this._calc(ig[i], eg[j]);
		}
	};

	// calculate for pair (impulse)
	p._calc = function(a, b) {
		var $v = $math.vector;
		var rv=$v.define(a.pos, b.pos), r=$v.length(rv);
		var f=(this.k*a.mass*b.mass)/(r*r), fv=$v.scale(rv, f/r);
		$v.add(a.imp, fv);
		$v.sub(b.imp, fv);
	};
})(this);
