/* @wolfram77 */
/* PARALLEL - define a function call parallelizer */

(function(g) {

	var $ = function(v) {
		// functions
		this.fns = v.fns||[];
		this.end = v.end;
	};
	var p = $.prototype;

	// run function (serially)
	p.run = function(fn) {
		var o = this;
		this.fns.push(fn);
		if(this.fns.length===1) process.nextTick(function() { o._call(); });
	};

	// indicate completion of function call
	p.done = function() {
		this.fns.shift();
		if(this.fns.length===0 && this.end) this.end();
	};

	// private: call functions
	p._call = function() {
		for(var i=0, I=this.fns.length; i<I; i++)
			this.fns[i]();
	};

	// ready
	if(typeof module!=='undefined') module.exports = $;
	else (g.$code=g.$code||{}).parallel = $;
	console.log('code.parallel> ready!');
})(this);
