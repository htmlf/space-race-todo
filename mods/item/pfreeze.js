/* @wolfram77 */
/* PFREEZE - define a freeze power */

(function(g, $o) {

	var $ = function() {
		var o = this;
		o.$super();
	};
	$o.inherit($, $$.graphics.item);
	var p = $.prototype;

	
	
	p.draw = function(c, r) {
		if(o.stt===0) doThis();
		else doThat();
	};

})($$, $$.type.object);