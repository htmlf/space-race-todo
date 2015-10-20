var $serial = $code.serial;
var sr = new $serial();
for(var i=0; i<10; i++)
	sr.call(function() {
	console.log('i am serial');
	setTimeout(function() { sr.end(); }, 1000);
});
