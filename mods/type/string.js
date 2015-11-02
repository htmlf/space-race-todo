/* @wolfram77 */
/* STRING - provides basic string functions */

(function(g) {

	var $ = {};

	// multiple replace
	$.mreplace = function(src, map) {
		var re = new RegExp(_.keys(map).join("|"), "g");
		return src.replace(re, function(m) { return map[m]; });
	};

	// ready!
	if(typeof module!=='undefined') module.exports = $;
	(g.type=g.type||{}).string = $;
	console.log('type.string> ready!');
})($$);
