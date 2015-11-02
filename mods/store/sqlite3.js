/* @wolfram77 */
/* SQLITE3 - defines a json interface for sqlite3 database */

(function(g, $s) {
	// node.js only
	if(typeof module==='undefined') return;
	// required modules
	var sqlite3 = require('sqlite3');
	var _ = require('lodash');

	var $ = sqlite3.Database;
	var p = sqlite3.Database.prototype;

	// expand % abbreviations
	p.expand = function(cmd) {
		return $s.mreplace(cmd, {
			'%I': 'INTEGER NOT NULL',
			'%i': 'INTEGER DEFAULT 0',
			'%R': 'REAL NOT NULL',
			'%r': 'REAL DEFAULT 0',
			'%T': 'TEXT NOT NULL',
			'%t': 'TEXT DEFAULT \'\'',
			'%B': 'BLOB NOT NULL',
			'%b': 'BLOB',
			'%p': 'PRIMARY KEY'
		});
	};

	// create filter (where part)
	p.filter = function(flt) {
		var cmd = '', vals = [];
		for(var k in flt) {
			var v = flt[k], tv = typeof v;
			if(tv==='number' || tv==='string') {
				var f = k + (k.search(/[><=:%#]/g)==-1? ' =' : '');
				f = z.mreplace(f, {':': ' NOT', '%': ' LIKE', '#': ' REGEXP'});
				cmd += ' AND '+f+' ?';
				vals.push(v);
				continue;
			}
			if(_.isArray(v)) {
				cmd += ' AND '+k+' IN ('+z.array([], v.length, '?').join()+')';
				z.apush(vals, v);
			}
			else for(var ck in v) {
				cmd += ' AND '+k+ck+'?';
				vals.push(v[ck]);
			}
		}
		cmd = cmd.length==0? cmd : ' WHERE'+cmd.substring(4);
		return {'cmd': cmd, 'vals': vals};
	};

	// batch execute
	// fn = (errs, grows)
	p.batch = function(stmts, fn) {
		var errs = [], grows = [];
		this.serialize(function() {
			for(var s=0; s<stmts.length; s++) (function(s, stmt) {
				this.all(stmt.cmd, stmt.vals, function(err, rows) {
					if(err) errs[s] = err;
					grows[s] = rows;
				});
			})(s, stmts[s]);
			this.run('PRAGMA no_op', function() {
				if(fn) fn(errs, grows);
			});
		});
	};

	// create table
	p.create = function(tab, flds, sfx) {
		for(var f=0, cols=[]; f<flds.length; f++)
			cols.push(this.expand(flds[f]));
		this.run('CREATE TABLE IF NOT EXISTS '+tab+'('+cols.join()+')'+(sfx||''));
	};

	// drop table
	p.drop = function(tab) {
		this.run('DROP TABLE IF EXISTS '+tab);
	};

	// insert rows
	p.insert = function(tab, gvals, fn) {
		var stmts = [];
		if(!_.isArray(gvals)) gvals = [gvals];
		for(var gv=0; gv<gvals.length; gv++) {
			var keys = _.keys(gvals[gv]);
			var cmd = 'INSERT INTO '+tab+'('+keys.join()+') VALUES ('+z.fjoin(keys, '$%i')+')';
			stmts.push({'cmd': cmd, 'vals': z.krename({}, gvals[gv], '$%i')});
		}
		this.batch(stmts, fn);
	};

	// delete rows
	p.delete = function(tab, flts, fn) {
		var stmts = [];
		if(!_.isArray(flts)) flts = [flts];
		for(var f=0; f<flts.length; f++) {
			var stmt = this.filter(flts[f]);
			stmt.cmd = 'DELETE FROM '+tab+stmt.cmd;
			stmts.push(stmt);
		}
		this.batch(stmts, fn);
	};

	// select rows
	p.select = function(tab, flts, fn) {
		var stmts = [];
		if(!_.isArray(flts)) flts = [flts];
		for(var f=0; f<flts.length; f++) {
			var stmt = this.filter(flts[f]);
			stmt.cmd = 'SELECT * FROM '+tab+stmt.cmd;
			stmts.push(stmt);
		}
		this.batch(stmts, fn);
	};

	// update rows
	p.update = function(tab, acts, fn) {
		var stmts = [];
		if(!_.isArray(acts)) acts = [acts];
		for(var a=0; a<acts.length; a++) {
			var cmd = '', vals = [];
			for(var sk in acts[a].vals) {
				cmd += sk+'=?, ';
				vals.push(acts[a].vals[sk]);
			}
			cmd = cmd.substring(0, cmd.length-2);
			var stmt = this.filter(acts[a].flt);
			stmt.cmd = 'UPDATE '+tab+' SET '+cmd+stmt.cmd;
			stmt.vals = z.apush(vals, stmt.vals);
			stmts.push(stmt);
		}
		this.batch(stmts, fn);
	};

	// ready
	module.exports = $;
	(g.store=g.store||{}).sqlite3 = $;
	console.log('store.sqlite3> ready!');
})($$);
