/* @wolfram77 */
/* RUN - build and run the server */

// required modules
var spawn = require('child_process').spawn;
var fs = require('fs');


// check if directory exists
var direxists = function(path) {
	try { return fs.lstatSync(path).isDirectory(); }
	catch(e) { return false; }
};

// run shell command
var shell = function(cmd, params) {
	var child = spawn(cmd, params);
	child.stdout.pipe(process.stdout);
	child.stderr.pipe(process.stderr);
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
	console.log('run> install %j', deps);
	shell('npm', ['install']);
};

// ready
installdeps();
shell('node', ['index']);
