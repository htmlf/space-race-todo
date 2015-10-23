/* @wolfram77 */
/* PARALLEL - define a function call parallelizer */

(function(g) {

	var $ = function(v) {
		// functions
		this.fns = v.fns || [];
		this.end = v.end;
	};
	var p = $.prototype;

	// run function (serially)
	p.run = function(fn) {
		this.fns.push(fn);
		if(this.fns.length===1) this._ntick(this.fns[0]);
	};

	// indicate completion of function call
	p.done = function() {
		this.fns.shift();
		if(this.fns.length>0) this._ntick(this.fns[0]);
		else if(this.end) this.end();
	};

	// private: next tick
	p._ntick = (typeof module!=='undefined')? process.nextTick : $code.process.nextTick;

	// ready
	if(typeof module!=='undefined') module.exports = $;
	else (g.$code=g.$code||{}).serial = $;
	console.log('code.serial> ready!');
})(this);
