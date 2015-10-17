var $e = $type.event;
var e = new $e();
e.on('test', function() { console.log('test'); });
e.is('test');
