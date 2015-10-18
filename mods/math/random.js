/* @wolfram77 */
/* RANDOM - basic random functions */

(function(g) {

	var $ = {};

	// symmetric powered
	$.sympow = function(rng, pow) {
		var v = Math.pow(Math.random(), pow);
		return rng[0] + (rng[1]-rng[0])*(0.5 + 0.5*(Math.random()>0.5? v:-v));
	};

	// ready
	if(typeof module!=='undefined') module.exports = $;
	else (g.$type=g.$type||{}).random = $;
	console.log('random> ready!');
})(this);
