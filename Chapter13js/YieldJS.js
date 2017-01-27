Array.prototype.getIterator = function () {
	"use strict";
	var inList = this,
		it = {},
		fnContexts = [],
		yieldIndex = -1,
		getFunctionContext = function (fnIndex, input) {
			var fnContext = fnContexts[fnIndex];
			if (fnContext === undefined) {
				fnContext = {
					"index": 0,
					"current": input,
					"outList": []
				};
				fnContexts[fnIndex] = fnContext;
			} else {
				fnContext.current = input;
				fnContext.index += 1;
			}
			return fnContext;
		},
		isYieldEmpty = function () {
			return ((yieldIndex + 1) === inList.length);
		},
		moveNext = function () {
			var args = arguments,
				yieldedResult = null,
				core = function () {
					var i,
						result = null,
						fn = null,
						fnCtxt = null,
						returnVal = null;
					yieldIndex += 1;
					result = inList[yieldIndex];
					if (args.length > 0) {
						for (i = 0; i < args.length; i += 1) {
							fn = args[i];
							fnCtxt = getFunctionContext(i, result);
							result = fn.call(null, fnCtxt);
							if (result === null) {
								break;
							} else {
								fnCtxt.outList.push(result);
							}
						}
						if (result !== null) {
							it.outList.push(result);
							it.current = result;
						}
						returnVal = result;
					} else {
						it.current = inList[yieldIndex];
						it.outList.push(it.current);
						returnVal = it.current;
					}
					return returnVal;
				};
			while ((yieldedResult === null) && (!isYieldEmpty())) {
				//Recursive call to find the next non-null value
				yieldedResult = core();
			}
			return (yieldedResult !== null) ? true : false;
		},
		iterate = function () {
			var slice = Array.prototype.slice;
			while (moveNext.apply(null, slice.apply(arguments))) {
				//Force chained evaluation of iterator methods (if any).
			}
			return it.outList;
		},
		reset = function () {
			fnContexts.length = 0;
			fnContexts = [];
			yieldIndex = -1;
			it.outList.length = 0;
			it.outList = [];
			it.current = null;
		};
	it.length = inList.length;
	it.outList = [];
	it.current = null;
	it.moveNext = moveNext;
	it.iterate = iterate;
	it.reset = reset;
	return it;
};

//Test Harness
function unique(context) {
	"use strict";
	return (context.outList.indexOf(context.current) < 0) ? context.current : null;
}

function square(context) {
	"use strict";
	return (context.current * context.current);
}

function filter(condition) {
	"use strict";
	return function (context) {
		return condition(context.current) ? context.current : null;
	};
}

function even(val) {
	"use strict";
	return (val % 2 === 0);
}

function reject4multiples(val) {
	"use strict";
	return (val % 4 !== 0);
}

function skip(count) {
	"use strict";
	return function (context) {
		return ((context.index % (count + 1)) === 0) ? context.current : null;
	};
}

var x = [1, 2, 3, 200, 1, 2, 3, 200],
	continuation = x.getIterator();
console.log(continuation.iterate());
continuation.reset();
while (continuation.moveNext()) {
	//console.log(continuation.current);
}
console.log(continuation.outList);

Function.prototype.getGenerator = function (setCount) {
	"use strict";
	var fnGen = this,
		numberOfElements = setCount,
		slice = Array.prototype.slice,
		gen = {},
		fnContexts = [],
		yieldIndex = -1,
		getFunctionContext = function (fnIndex, input) {
			var fnContext = fnContexts[fnIndex];
			if (fnContext === undefined) {
				fnContext = {
					"index": 0,
					"current": input,
					"outList": []
				};
				fnContexts[fnIndex] = fnContext;
			} else {
				fnContext.current = input;
				fnContext.index += 1;
			}
			return fnContext;
		},
		isYieldEmpty = function () {
			return ((yieldIndex + 1) === numberOfElements);
		},
		moveNext = function () {
			var args = arguments,
				yieldedResult = null,
				core = function () {
					var i,
						result = null,
						fn = null,
						fnCtxt = null;
					yieldIndex += 1;
					result = fnGen.apply(null, []);
					if (args.length > 0) {
						for (i = 0; i < args.length; i += 1) {
							fn = args[i];
							fnCtxt = getFunctionContext(i, result);
							result = fn.call(null, fnCtxt);
							if (result === null) {
								break;
							} else {
								fnCtxt.outList.push(result);
							}
						}
						if (result !== null) {
							gen.current = result;
						}
					} else {
						gen.current = result;
					}
					return result;
				};
			while ((yieldedResult === null) && (!isYieldEmpty())) {
				//Recursive call to find the next non-null value
				yieldedResult = core();
			}
			return (yieldedResult !== null) ? true : false;
		};
	gen.current = null;
	gen.moveNext = moveNext;
	return gen;
};

function sequence(z) {
	"use strict";
	var y = 0;
	return function () {
		y += z;
		return y;
	};
}

var a = sequence(1).getGenerator(10);//For generating the first 10 elements (1 through 10)
while(a.moveNext(skip(1), square)) {
	console.log(a.current);
}

//a.nextSet(5);//For generating the next 5 elements (11 through 15)
//console.log(a.generate());
