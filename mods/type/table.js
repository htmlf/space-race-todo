/* @wolfram77 */
/* TABLE - tabular data structuring functions */

(function(g) {

	var $ = {};

	// column names
	$.cols = function(t) {
		return (t.length!==undefined? (t[0]||{}): t).keys();
	};

	// row count
	$.rows = function(t) {
		return t.length===undefined? (t[t.keys()[0]||' ']||[]).length : t.length;
	};

	// column wise data
	$.colwise = function(t, cs) {
		if(!t.length) return t.length===0? {} : (t||{});
		if(!cs) cs = t[0].keys();
		for(var c=0, C=cs.length, dst={}; c<C; c++)
			dst[cs[c]] = [];
		for(var r=0, R=v.length; r<R; r++)
			for(c=0; c<C; c++)
				dst[cs[c]][r] = t[r][cs[c]];
		return dst;
	};

	// row wise data
	$.rowwise = function(t, cs) {
		if(t.length>=0) return t;
		if(!cs) cs = t.keys();
		for(var r=0, R=(cs.length? (t[cs]||[]).length : 0), dst=[]; r<R; r++)
			dst[r] = {};
		for(var c=0, C=cs.length; c<C; c++)
			for(r=0; r<R; r++)
				dst[r][cs[c]] = t[cs[c]][r];
	};

	// ready
	if(typeof module!=='undefined') module.exports = $;
	else (g.$type=g.$type||{}).table = $;
	console.log('table> ready!');
})(this);
