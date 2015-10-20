/* @wolfram77 */
/* SERIAL - define a serially runnable function calls */

(function(g) {

	var $ = function(ps) {
		// parameters
		this.ps = ps || [];
	};
	var p = $.prototype;

	// call function with argument list
	p.call = function(fn, vthis) {
		this.apply(fn, vthis, Array.prototype.slice.call(arguments, 2));
	};

	// call function with arguments array
	p.apply = function(fn, vthis, args) {
		this.ps.push({'fn': fn, 'vthis': vthis, 'args': args});
		if(this.ps.length===1) this.run(this.ps[0]);
	};

	// private: next tick
	p.nextTick = (typeof process!=='undefined' && process.nextTick)? process.nextTick : function(fn) { setTimeout(fn, 0); };

	// private: run function
	p.run = function(pr) {
		this.nextTick(function() { pr.fn.apply(pr.vthis, pr.args); });
	};

	// indicate end of function call
	p.end = function() {
		this.ps.shift();
		if(this.ps.length>0) this.run(this.ps[0]);
	};

	// ready
	if(typeof module!=='undefined') module.exports = $;
	else (g.$code=g.$code||{}).serial = $;
	console.log('serial> ready!');
})(this);
