var Rx = require('rx');
// Load Node.js Filesystem module
var fs = require('fs');

var disposable = Rx.Scheduler.default.scheduleRecursive(
	0,
	function (i, recurse) {
		// Create an Observable from the watch method
		var source = Rx.Observable.fromCallback(fs.watch)('./tmp', { encoding: 'buffer' });
		var subscription = source.subscribe(
			function (changes) {
				console.log('Next: ', i, changes);
			},
			function (err) {
				console.log('Error: ', err);
			},
			function () {
				console.log('Completed');
				++i;
				recurse(i);
			});
	}
);