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
		var o = this;
		o.ps.push({'fn': fn, 'vthis': vthis, 'args': args});
		if(o.ps.length===1) process.nextTick(function() { o.run(); });
	};

	// private: run function
	p.run = function() {
		var pr = this.ps[0];
		pr.fn.apply(pr.vthis, pr.args);
	};

	// indicate end of function call
	p.end = function() {
		var o = this;
		this.ps.shift();
		if(this.ps.length>0) process.nextTick(function() { o.run(); });
	};

	// ready
	if(typeof module!=='undefined') module.exports = $;
	else (g.$code=g.$code||{}).serial = $;
	console.log('serial> ready!');
})(this);
