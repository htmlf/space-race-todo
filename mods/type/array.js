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
	$.append = function(d, a) {
		d.push.apply(d, a);
		return d;
	};

	// last item
	$.last = function(a) {
		return a[a.length-1];
	};

	// index of item
	$.indexOf = function(a, val, bgn, end) {
		for(var i=bgn||0, I=end||a.length; i<I; i++)
			if(a[i]==val) return i;
		return -1;
	};

	// pack array items (non-null)
	$.pack = function(a) {
		for(var i=0, j=0, I=a.length; i<I; i++)
			if(a[i]!==null) { a[j] = a[i]; j++; }
	};

	// formatted join
	$.fjoin = function(arr, fmt, sep) {
		for(var i=0, I=arr.length, dst=''; i<I; i++)
			dst += fmt.replace(/%i/g, arr[i]) + (i===I-1? '' : sep||',');
		return dst;
	};

	// ready!
	if(typeof module!=='undefined') module.exports = $;
	(g.type=g.type||{}).array = $;
	console.log('type.array> ready!');
})($$);
