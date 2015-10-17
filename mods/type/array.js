/* @wolfram77 */
/* ARRAY - provides basic array functions */

(function(g) {

	// fill values
	if(!Array.prototype.fill) Array.prototype.fill = function(val, bgn, end) {
		for(var i=bgn||0, I=end||this.length; i<I; i++)
			this[i] = val;
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
	Array.prototype.append = function(arr) {
		this.push.apply(this, arr);
	};

	// last item
	Array.prototype.last = function() {
		return this[this.length-1];
	};


	// ready!
	if(typeof module!=='undefined') module.exports = Array;
	console.log('array> ready!');
})(this);
