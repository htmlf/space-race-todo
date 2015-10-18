/* @wolfram77 */
/* RANDOM - basic random functions */

var $math = $math || {};
$math.random = {

	// symmetric powered
	'sympow': function(rng, pow) {
		var v = Math.pow(Math.random(), pow);
		return rng[0] + (rng[1]-rng[0])*(0.5 + 0.5*(Math.random()>0.5? v:-v));
	}
};
