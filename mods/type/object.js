/* @wolfram77 */
/* OBJECT - provides basic object functions */

(function(g) {

	var $ = {};

	// appends properties only
	$.append = function(dst, src) {
		for(var k in src)
			if(src.hasOwnProperty(k)) dst[k] = src[k];
	};

	// merge properties and prototype
	$.merge = function(dst, src) {
		for(var k in src)
			dst[k] = src[k];
	};

	// ready!
	if(typeof module!=='undefined') module.exports = $;
	else (g.$type=g.$type||{}).object = $;
	console.log('type.object> ready!');
})(this);
