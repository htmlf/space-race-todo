/* @wolfram77 */
/* SERIAL - define a serially runnable function */

(function(g) {

	var $ = function(fn) {
		this.fn = fn;
		this.ps = [];
	};
	var p = $.prototype;

	p.call = function() {
		this.apply(arguments[0], Array.prototype.slice.call(arguments, 1));
	};

	p.apply = function(vthis, args) {
		this.ps.push([vthis, args]);
		if(this.ps.length===1) process.nextTick(function() { this.run(); });
	};

	p.run = function() {
		this.fn.apply(this.ps[0][0], this.ps[0][1]);
	};

	p.end = function() {
		this.ps.shift();
		if(this.ps.length>0) process.nextTick(function() { this.run(); });
	};
})(this);
