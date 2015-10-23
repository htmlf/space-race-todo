/* @wolfram77 */
/* SERIAL - define a function call serializer */

(function(g) {

	var $ = function(v) {
		// functions
		this.fns = v.fns || [];
		this.fend = v.fend;
	};
	var p = $.prototype;

	// run function (serially)
	p.run = function(fn) {
		this.fns.push(fn);
		if(this.fns.length===1) this._ntick(this.fns[0]);
	};

	// indicate end of function call
	p.end = function() {
		this.fns.shift();
		if(this.fns.length>0) this._ntick(this.fns[0]);
		else if(this.fend) this.fend();
	};

	// private: next tick
	p._ntick = (typeof module!=='undefined')? process.nextTick : $code.process.nextTick;

	// ready
	if(typeof module!=='undefined') module.exports = $;
	else (g.$code=g.$code||{}).serial = $;
	console.log('code.serial> ready!');
})(this);
