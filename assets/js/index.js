var $p = $code.process;
$p.nextTick(function() { console.log('hi-1'); });
$p.nextTick(function() { console.log('hi-2'); });
console.log('hi-0');
console.log($p.title);
console.log($p.uptime());
console.log($p.hrtime());
console.log($p.memoryUsage());
console.log($p.platform);
