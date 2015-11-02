/* @wolfram77 */
/* RECT - defines a rectangular area */

(function(g) {

	var $ = {};

	// define by 2 diagonal points
	$.define = function(p, q) {
		return p.concat(q);
	};

	// shift rect by specified vector
	$.translate = function(a, v) {
		return [a[0]+v[0], a[1]+v[1], a[2]+v[0], a[3]+v[1]];
	};

	// check if two rects overlap
	$.overlaps = function(a, b) {
		return !(a[0]>b[2] || a[2]<b[0] || a[1]>b[3] || r[3]<s[1]);
	};

	// ready
	if(typeof module!=='undefined') module.exports = $;
	(g.math=g.math||{}).rect = $;
	console.log('math.rect> ready!');
})($$);
