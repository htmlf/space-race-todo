/* @wolfram77 */
/* PROCESS - process details for browser */

(function(g) {

	// ready?
	if(typeof module!=='undefined') {
		module.exports = process;
		return;
	}

	var $ = {};

	// high-res time (now)
	$.now = performance.now? function() { return performance.now(); } : Date.now;

	// uptime since navigation
	$.uptime = function() {
		return $.now() - $._tload;
	};

	// high-res time (with nanoseconds)
	$.hrtime = function() {
		var ms = $.now();
		return [parseInt(ms/1000, 10), (ms % 1000)*1000000];
	};

	// run function on next tick
	$.nextTick = function(fn) {
		$._tqueue.push(fn);
		if($._tqueue.length===1) setTimeout($._ftick, 0);
	};

	// js memory usage
	$.memoryUsage = function() {
		var v = (performance||{}).memory||{};
		return {'rss': v.jsHeapSizeLimit||0, 'heapTotal': v.totalJSHeapSize||0, 'heapUsed': v.usedJSHeapSize||0};
	};

	// platform
	$.platform = navigator.platform;

	// title
	$.title = document.title;

	// private: next tick support function
	$._ftick = function() {
		for(var i=0, I=$._tqueue.length; i<I; i++)
			$._tqueue.shift()();
	};

	// private: module load time
	$._tload = $.now();
	// private: next tick queue
	$._tqueue = [];


	// ready
	(g.$code=g.$code||{}).process = $;
	console.log('code.process> ready!');
})(this);
