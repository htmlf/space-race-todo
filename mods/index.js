var $random = $math.random;
var a = [];
for(var i=0; i<10; i++)
	a.push($random.sympow([1,2], 4));
console.log(a);
