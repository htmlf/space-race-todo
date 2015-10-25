/* @wolfram77 */
/* BODY - defines a physical body (object) */

(function(g) {

	var $ = function(v) {
		this.mas = v.mas||0;
		this.pos = v.pos||[0,0];
		this.scl = v.scl||[1,1];
		this.vel = v.vel||[0,0];
		this.imp = v.imp||[0,0];
		this.ang = v.ang||0;
		this.avl = v.avl||0;
		this.aip = v.aip||0;
	};
	var p = $.prototype;

	// translate (object)
	p.translate = function(p) {
		var $v=$math.vector;
		this.pos = $v.add(this.pos, $v.rotate(p, this.ang));
	};

	// rotate (object)
	p.rotate = function(a) {
		this.ang += a;
	};

	// scale (object)
	p.scale = function(s) {
		this.scl[0] += s[0];
		this.scl[1] += s[1];
	};

	// ready
	if(typeof module!=='undefined') module.exports = $;
	else (g.$physics=g.$physics||{}).body = $;
	console.log('physics.body> ready!');
})(this);
