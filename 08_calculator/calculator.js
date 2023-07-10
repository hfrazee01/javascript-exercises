const add = function (num1, num2) {
	return num1 + num2;
};

const subtract = function (num1, num2) {
	return num1 - num2;
};

const sum = function (arr) {
	let sum = 0
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
};

const multiply = function (...args) {
	let product = 1;
	for (let i = 0; i < args.length; i++) {
		product *= args[i];
	}
	return product;
};

const power = function (base, exp) {
	return Math.pow(base, exp);
};

const factorial = function (num) {
	if (num === 0 || num === 1) return 1;
	else if (num >= 2) return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
};
