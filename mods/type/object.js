/* @wolfram77 */
/* OBJECT - provides basic object functions */

(function(g) {

	// appends properties only
	Object.prototype.append = function(obj) {
		for(var k in obj)
			if(this.hasOwnProperty(k)) this[k] = obj[k];
	};

	// merge properties and prototype
	Object.prototype.merge = function(obj) {
		for(var k in obj)
			this[k] = obj[k];
	};

	// ready!
	if(typeof module!=='undefined') module.exports = Object;
	else (g.$type=g.$type||{}).object = Object;
	console.log('type.object> ready!');
})(this);
