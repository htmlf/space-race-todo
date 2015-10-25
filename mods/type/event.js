/* @wolfram77 */
/* EVENT - defines an event emitter */

(function(g) {

	var $ = function(v) {
		// subscriptions
		this.sub = v||{};
	};
	var p = $.prototype;

	// add subscription
	p.on = function(e, fn) {
		var se = (this.sub[e]=this.sub[e]||[]);
		if(se.indexOf(fn)<0) se.push(fn);
	};

	// remove subscription
	p.off = function(e, fn) {
		var se = this.sub[e], i = se? se.indexOf(fn) : -1;
		if(i>=0) se.splice(i, 1);
	};

	// declare/publish event
	p.is = function(e, args) {
		var o = this;
		process.nextTick(function() { o._call(); });
	};

	// private: call functions
	p._call = function() {
		for(var se=this.sub[e], i=0, I=(se||[]).length; i<I; i++)
			se[i](args);
	};

	// ready
	if(typeof module!=='undefined') module.exports = $;
	else (g.$type=g.$type||{}).event = $;
	console.log('type.event> ready!');
})(this);
