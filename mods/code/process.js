/* @wolfram77 */
/* PROCESS - process details for browser */

(function(g) {

	// ready?
	if(typeof module!=='undefined') {
		module.exports = process;
		return;
	}

	var $ = {};

	// current time
	$.now = function() {
		return (new Date()).getTime();
	};

	// uptime since navigation
	$.uptime = function() {
		return $.now() - $.load_time;
	};

	// current high resolution time
	$.hrtime = function() {
		var ms = $.now();
		return [ms/1000, (ms % 1000)*1000000];
	};

	// module load time
	$.load_time = $.now();

	// ready
	(g.$code=g.$code||{}).process = $;
	console.log('code.process> ready!');
})(this);
