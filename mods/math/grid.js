/* @wolfram77 */
/* GRID - defines a 2d splittable grid */

(function(g) {

	var $ = function(v) {
		this.off = v.off||[0,0]; // offset (x,y)
		this.res = v.res||[1,1]; // split resolution (x,y)
		this.data = v.data||[]; // data
		this.grid = null; // split grid
	};
	var p = $.prototype;

	p.add = function(a, r) {
		this.where(r).push(a);
	};

	p.remove = function(a, r) {
		
	};

	p.update = function(a, ro, rn) {

	};

	p.get = function() {

	};

	// gives the grid where item can be added
	p.where = function(r) {
		for(var o=this,x=0,y=0; o.grid; o=o.grid[x][y]) {
			x=parseInt((r[0]-o.off[0])*o.scl[0]); y=parseInt((r[1]-o.off[1])*o.scl[1]);
			if(x!==parseInt((r[2]-o.off[0])*o.scl[0]) || y!==parseInt((r[3]-o.off[1])*o.scl[1])) break;
			o = o.grid[x][y];
		}
		return o;
	};

})($$);
