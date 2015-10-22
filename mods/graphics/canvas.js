/* @wolfram77 */
/* CANVAS - html canvas related operations */

var $graphics = $graphics || {};
$graphics.canvas = function(id) {
	var $v = $math.vector;
	var $l = $math.line;
	var c = document.getElementById(id);
	if(!c.getContext) return null;
	var o = c.getContext('2d');
	o.element = c;

	// path smooth lines
	o.path_smooth = function(p, closed) {
		if(p.length<3) {
			o.path_line(p, closed);
			return;
		}
		o.beginPath();
		o.moveTo(p[0][0], p[0][1]);
		var ln = $g.line_parallel($g.line(p[p.length-1], p[1]), p[0]), ln0 = ln;
		for(var i=1, I=p.length; i<I; i++) {
			var ln1 = $g.line_parallel($g.line(p[i-1], p[i+1]||p[0]), p[i]);
			var pi = $g.line_intersect(ln0, ln1);
			o.quadraticCurveTo(pi[0], pi[1], p[i][0], p[i][1]);
			ln0 = ln1;
		}
		if(closed) {
			pi = $g.line_intersect(ln, ln0);
			o.quadraticCurveTo(pi[0], pi[1], p[0][0], p[0][1]);
		}
	};

	// path lines
	o.path_line = function(p, closed) {
		o.beginPath();
		if(p.length>0) o.moveTo(p[0][0], p[0][1]);
		for(var i=0, I=p.length; i<I; i++)
			o.lineTo(p[i][0], p[i][1]);
		if(closed) o.closePath();
		o.stroke();
	}

	// path function
	o.path_fn = function(p, closed) {
		o.beginPath();
		if(p.length>1) o.moveTo(p[0][0], p[0][1]);
		for(var i=p.length>1? 1:0; i<p.length; i++)
			o[p[i].fn].apply(o, p[i].args);
		if(closed) o.closePath();
	};

	// path of type
	o.path = {
		'smooth': o.path_smooth,
		'line': o.path_line,
		'fn': o.path_fn
	};

	// ready
	console.log('canvas> ready!');
	return o;
};
(function(o) {

	// ellipse path
	// thanks: http://www.williammalone.com/briefs/how-to-draw-ellipse-html5-canvas/
	o.ellipse = function(x, y, w, h) {
		var a=0.5*w, b=0.5*0.8*h;
		this.beginPath();
		this.moveTo(x, y-b);
		this.bezierCurveTo(x+a, y-b,	x+a, y+b,	x, y+b);
		this.bezierCurveTo(x-a, y+b, x-a, y-b, x, y-b);
	};

	// generic (function-based) path
	var pathFn = function(p, closed) {
		this.beginPath();
		if(p.length>1) this.moveTo(p[0][0], p[0][1]);
		for(var i=(p.length>1? 1:0), I=p.length; i<I; i++)
			this[p[i].fn].apply(this, p[i].args);
		if(closed) this.closePath();
	};


	// line path
	var pathLine = function(p, closed) {
		this.beginPath();
		if(p.length>0) this.moveTo(p[0][0], p[0][1]);
		for(var i=0, I=p.length; i<I; i++)
			this.lineTo(p[i][0], p[i][1]);
		if(closed) this.closePath();
	};

	// smooth line path
	var pathSmooth = function(p, closed) {
		if(p.length<3) {
			pathLine(p, closed);
			return;
		}
		this.beginPath();
		this.moveTo(p[0][0], p[0][1]);
		var ln = $l.parallel($l.define(p[p.length-1], p[1]), p[0]), ln0 = ln;
		for(var i=1, I=p.length; i<I; i++) {
			var ln1 = $l.parallel($l.define(p[i-1], p[i+1]||p[0]), p[i]);
			var pi = $l.intersect(ln0, ln1);
			this.quadraticCurveTo(pi[0], pi[1], p[i][0], p[i][1]);
			ln0 = ln1;
		}
		if(closed) {
			pi = $l.intersect(ln, ln0);
			this.quadraticCurveTo(pi[0], pi[1], p[0][0], p[0][1]);
		}
	};

	// generic path
	o.path = function(p, opt) {
		var closed = opt.indexOf('closed')>=0;
		if(!p.length) pathFn(p, closed);
		else if(opt.indexOf('smooth')<0) pathLine(p, closed);
		else pathSmooth(p, closed);
	};
})($graphics.canvas.prototype);
