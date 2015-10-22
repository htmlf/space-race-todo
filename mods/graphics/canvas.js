/* @wolfram77 */
/* CANVAS - html canvas related operations */

(function(g) {

	var $ = function(id) {
		console.log(id);
		var c = document.getElementById(id);
		if(!c.getContext) return;
		var o = c.getContext('2d');
		// element (for width, height)
		o.element = c;
		return o;
	};
	var p = CanvasRenderingContext2D.prototype;

	// ellipse path
	// thanks: http://www.williammalone.com/briefs/how-to-draw-ellipse-html5-canvas/
	p.ellipse = function(x, y, w, h) {
		var a=0.5*w, b=0.5*0.8*h;
		this.moveTo(x, y-b);
		this.bezierCurveTo(x+a, y-b, x+a, y+b, x, y+b);
		this.bezierCurveTo(x-a, y+b, x-a, y-b, x, y-b);
	};

	// path (function-based)
	p.pathFn = function(p, closed) {
		this.beginPath();
		for(var i=0, I=p.length; i<I; i++)
			this[p[i].fn].apply(this, p[i].args);
		if(closed) this.closePath();
	};

	// path (line)
	p.pathLine = function(p, closed) {
		console.log(this);
		this.beginPath();
		if(p.length>0) this.moveTo(p[0][0], p[0][1]);
		for(var i=0, I=p.length; i<I; i++)
			this.lineTo(p[i][0], p[i][1]);
		if(closed) this.closePath();
	};

	// path (smooth)
	p.pathSmooth = function(p, closed) {
		var $l = $math.line;
		if(p.length<3) { pathLine(p, closed);	return;	}
		this.beginPath();
		this.moveTo(p[0][0], p[0][1]);
		var ln = $l.parallel($l.define(p[p.length-1], p[1]), p[0]), ln0 = ln, ln1, pi;
		for(var i=1, I=p.length; i<I; i++) {
			ln1 = $l.parallel($l.define(p[i-1], p[i+1]||p[0]), p[i]);
			pi = $l.intersect(ln0, ln1);
			this.quadraticCurveTo(pi[0], pi[1], p[i][0], p[i][1]);
			ln0 = ln1;
		}
		if(closed) {
			pi = $l.intersect(ln, ln0);
			this.quadraticCurveTo(pi[0], pi[1], p[0][0], p[0][1]);
		}
	};

	// path (generic)
	p.path = function(p, opt) {
		opt = opt || '';
		var closed = opt.indexOf('c')>=0;
		if(!p.length) this.pathFn(p, closed);
		else if(opt.indexOf('s')<0) this.pathLine(p, closed);
		else this.pathSmooth(p, closed);
	};

	// ready
	if(typeof module!=='undefined') module.exports = $;
	else (g.$graphics=g.$graphics||{}).canvas = $;
	console.log('canvas> ready!');
})(this);
