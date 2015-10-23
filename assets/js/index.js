var $p = $code.process;
$p.nextTick(function() { console.log('hi-1'); });
$p.nextTick(function() { console.log('hi-2'); });
console.log('hi-0');
