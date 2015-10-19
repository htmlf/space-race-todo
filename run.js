/* @wolfram77 */
/* RUN - build and run the server */

// required modules
var childProcess = require('child_process');
var fs = require('fs');


// shell command lists
var shellcmds = [];

// check if directory exists
var direxists = function(path) {
	try { return fs.lstatSync(path).isDirectory(); }
	catch(e) { return false; }
};

var runshell = function() {
	if(shellcmds.length===0) return;
	if(shellcmds[0].start) shellcmds[0].start();
	var child = childProcess.exec(shellcmds[0].cmd, function(err) {
		if(err) console.log('shell> %j', err);
		process.nextTick(runshell);
		if(shellcmds[0].end) shellcmds[0].end();
		shellcmds.shift();
	});
	child.stdout.pipe(process.stdout);
	child.stderr.pipe(process.stderr);
};

// run shell command
var shell = function(cmd, start, end) {
	shellcmds.push({'cmd': cmd, 'start': start, 'end': end});
	if(shellcmds.length===1) runshell();
};

// install dependencies
var installdeps = function() {
	var has = direxists('node_modules');
	if(has) {
		var pkg = JSON.parse(fs.readFileSync('package.json'));
		var deps = (Object.keys(pkg.dependencies||{})).concat(Object.keys(pkg.devDependencies||{}));
		for(var i=0; i<deps.length; i++)
			has = has && direxists('node_modules/'+deps[i]);
	}
	if(has) return;
	shell('npm install', function() {
		console.log('\x1b[36m'+'run> install %j'+'\x1b[0m', deps);
	}, function() {
		console.log('\n');
	});
};

// ready
installdeps();
shell('node index', function() {
	console.log('\x1b[36m'+'run> server'+'\x1b[0m');
});
