function onComplete(message) {
	console.log(message);
}

function doSomething(onComplete) {
	//Do what is needed here and then trigger onComplete
	onComplete("Complete!");
}

doSomething(onComplete);

function add(x) {
	return function (y) {
		return x + y;
	};
};

var addTen = add(10);
console.log(addTen(5));//Returns 15
console.log(add(2)(3));//Returns 5

Function.prototype.throws = function (error) {
	var slice = Array.prototype.slice,
		args = slice.apply(arguments),
		errorMessage = args[0],
		fn = this;
	return function () {
		try {
			return fn.apply(null, args.slice(1));
		}
		catch (e) {
			console.log(errorMessage);
			//Do what is needed apart from logging
		}
	} ();
};

function errorSimulator(a, b) {
	console.log(a, b);
	return (parseInt(RxJS, 10));
}


errorSimulator.throws("I have you!", 2, 0);//Prints this message in console
//errorSimulator(2, 0);//Throws a ReferenceError: RxJS is not defined



