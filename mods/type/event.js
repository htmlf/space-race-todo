/* @wolfram77 */
/* EVENT - event declaration and handling related functions */

var $type = $type || {};
$type.event = function(v) {

	// subscriptions
	this.v = v || {};
};
(function(o) {

	// add subscription
	o.on = function(e, fn) {
		this.v[e] = this.v[e] || [];
		if(this.v[e].indexOf(fn)<0) this.v[e].push(fn);
	};

	// remove subscription
	o.off = function(e, fn) {
		var i = this.v[e]? this.v[e].indexOf(fn) : -1;
		if(i>=0) this.v[e].splice(i, 1);
	};

	// declare/publish event
	o.is = function(e, args) {
		for(var i=0, I=(this.v[e]||[]).length; i<I; i++)
			this.v[e][i](args);
	};
})($type.event.prototype);
