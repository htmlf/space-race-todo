/* @wolfram77 */
/* ARRAY - provides basic array functions */

(function(g) {

	var $ = {};

	// fill values
	if(!Array.prototype.fill) Array.prototype.fill = function(val, bgn, end) {
		for(var i=bgn||0, I=end||this.length; i<I; i++)
			this[i] = val;
		return this;
	};

	// create from iterable
	if(!Array.from) Array.from = function(lst, fn, ths) {
		var k, a = [];
		fn = fn || (function(v) { return v; });
		ths = ths || this;
		for(k in lst)
			a.push(fn.call(ths, k, lst[k]));
		return a;
	};

	// append an array
	$.append = function(dst, src) {
		dst.push.apply(dst, arr);
		return dst;
	};

	// last item
	$.last = function(arr) {
		return arr[arr.length-1];
	};

	// formatted join
	$.fjoin = function(src, fmt, sep) {
		for(var i=0,I=src.length,dst=''; i<I; i++)
			dst += fmt.replace(/%i/g, src[i]) + (i===I-1? '' : sep||',');
		return dst;
	};

	// ready!
	if(typeof module!=='undefined') module.exports = $;
	(g.type=g.type||{}).array = $;
	console.log('type.array> ready!');
})($$);
