/* @wolfram77 */
/* RUN - build and run the server */

// required modules
var exec = require('child_process').exec;
var fs = require('fs');


// check if directory exists
var direxists = function(path) {
	try { return fs.lstatSync(path).isDirectory(); }
	catch(e) { return false; }
};
