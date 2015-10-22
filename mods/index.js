$(document).ready(function() {
	var c = new $graphics.canvas('canvas');
	c.path([[0,0], [20,20], [30,10]], 's');
	c.stroke();
});
