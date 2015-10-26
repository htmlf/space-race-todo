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


	// ready
	if(typeof module!=='undefined') module.exports = $;
	else (g.$physics=g.$physics||{}).body = $;
	console.log('physics.body> ready!');
})(this);
