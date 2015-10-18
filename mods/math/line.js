/* @wolfram77 */
/* LINE - math functions for lines */

(function(g) {

	var $ = {};

	// define from point a to b
	$.define = function(a, b) {
		var m = (b[1]-a[1]) / (b[0]!==a[0]? b[0]-a[0] : 0.0001);
		return [m, b[1]-m*b[0]];
	};

	// parallel to line a through point p
	$.parallel = function(a, p) {
		return [a[0], p[1]-a[0]*p[0]];
	};

	// perpendicular to line a through point p
	$.perpendicular = function(a, p) {
		return [-1/a[0], p[1]+p[0]/a[0]];
	};

	// intersection point of lines a, b
	$.intersect = function(a, b) {
		var x = (b[1]-a[1]) / (a[0]===b[0]? 0.0001 : a[0]-b[0]);
		return [x, a[0]*x+a[1]];
	};

	// distance of point p from line a
	$.distance = function(a, p) {
		var q = $.intersect($.perpendicular(a, p), a);
		return Math.sqrt((p[0]-q[0])*(p[0]-q[0]) + (p[1]-q[1])*(p[1]-q[1]));
	};

	// intersection point of ranged lines a, b (a = point p to q)
	$.intersectRanged = function(a, b) {
		var p = $.intersect($.define(a[0], a[1]), $.define(b[0], b[1]));
		return ((p[0]>=a[0][0] && p[0]<=a[1][0])||(p[0]>=b[0][0] && p[0]<=b[1][0]))? p : null;
	};

	// ready
	if(typeof module!=='undefined') module.exports = $;
	else (g.$type=g.$type||{}).line = $;
	console.log('line> ready!');
})(this);
