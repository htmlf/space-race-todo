/* @wolfram77 */
/* TABLE - tabular data structuring functions */

var $type = $type || {};
$type.table = {

	// column names
	'cols': function(v) {
		return (v.length!==undefined? (v[0]||{}): v).keys();
	},

	// row count
	'rows': function(v) {
		return v.length===undefined? (v[v.keys()[0]||' ']||[]).length : v.length;
	},

	// data in column order
	'colwise': function(v, cs) {
		if(!v.length) return v.length===0? {} : (v||{});
		if(!cs) cs = v[0].keys();
		for(var c=0, C=cs.length, dst={}; c<C; c++)
			dst[cs[c]] = [];
		for(var r=0, R=v.length; r<R; r++)
			for(c=0; c<C; c++)
				dst[cs[c]][r] = v[r][cs[c]];
		return dst;
	},

	// data in row order
	'rowwise': function(v, cs) {
		if(v.length>=0) return v;
		if(!cs) cs = v.keys();
		for(var r=0, R=(cs.length? (v[cs]||[]).length : 0), dst=[]; r<R; r++)
			dst[r] = {};
		for(var c=0, C=cs.length; c<C; c++)
			for(r=0; r<R; r++)
				dst[r][cs[c]] = v[cs[c]][r];
	}
};
