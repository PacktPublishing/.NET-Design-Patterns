var Rx = require('rx');
Rx.Observable.just('Hello RxJS!').subscribe(function (value) {
	console.log(value);
});

var client = Rx.Observable.create(function (observer) {
	observer.onNext('On Your Mark');
	observer.onNext('Get Set');
	observer.onNext('GO');
	observer.onCompleted();
});

client.subscribe(
	function onNext(x) { console.log('Next: ' + x); },
	function onError(err) { console.log('Error: ' + err); },
	function onCompleted() { console.log('Completed'); }
);

Rx.Observable
	.from(['On Your Mark', 'Get Set', 'GO'])
	.subscribe(
	function (x) { console.log('Next: ' + x); },
	function (err) { console.log('Error:', err); },
	function () { console.log('Completed'); }
	);

//Use code below in JSBin for testing MouseEvent seqeunces	
/*
var allMoves = Rx.Observable.fromEvent(document, 'mousemove')
allMoves.subscribe(function (e) {
	console.log(e.clientX, e.clientY);
});

var movesCrossingDiagonal = allMoves.filter(function (e) {
	return e.clientX === e.clientY;
});
movesCrossingDiagonal.subscribe(function (e) {
	console.log('Crosssed the diagnal:', e.clientX, e.clientY);
});*/

// Load Node.js Filesystem module
var fs = require('fs');
// Create an Observable from the watch method
var source = Rx.Observable.fromCallback(fs.watch)('./tmp', { encoding: 'buffer' });
// Create an Observer
var fsClient = Rx.Observer.create(
	function (changes) {
		console.log('Next: ', changes);
	},
	function (err) {
		console.log('Error: ', err);
	},
	function () {
		console.log('Completed');
	}
);
var subscription = source.subscribe(fsClient);

/**
 * Demonstrates Observable Pipeline
 */
Rx.Observable
	.from([1, 2, 3, 4, 5, 6, 7, 8])
	.skip(4)
	.map(function (val) { return val * val; })
	.subscribe(function (value) {
		console.log('Next : ', value);
	});

/**
 * Demonstrates Subjects
 */
var subject = new Rx.Subject();
var source = Rx.Observable
	.interval(1000)
	.take(3);
source.subscribe(subject);
//Observer #1
var client1 = subject.subscribe(
	function (changes) {
		console.log('Client1 Next: ', changes);
	},
	function (err) {
		console.log('Client1 Error: ', err);
	},
	function () {
		console.log('Client1 Completed!');
	}
);
//Observer #2
var client2 = subject.subscribe(
	function (changes) {
		console.log('Client2 Next: ', changes);
	},
	function (err) {
		console.log('Client2 Error: ', err);
	},
	function () {
		console.log('Client2 Completed!');
	}
);
subject.onNext(5);
subject.onNext(15);
subject.onNext(20);
setTimeout(function () {
	subject.onCompleted();
	client1.dispose();
	client2.dispose();
}, 5000);