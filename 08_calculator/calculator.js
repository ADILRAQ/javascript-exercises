const add = function(op1, op2) {
  return (op1 + op2);
};

const subtract = function(op1, op2) {
	return (op1 - op2);
};

const sum = function(array) {
  return (array.reduce((acc, cur) => acc + cur, 0));
};

const multiply = function(array) {
  return (array.reduce((acc, cur) => acc * cur, 1));
};

const power = function(op1, op2) {
	return (Math.pow(op1, op2));
};

const factorial = function(op) {
  if (op === 0 || op === 1)
    return 1;
	return (Math.factorial(op));
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
