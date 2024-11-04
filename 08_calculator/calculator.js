const add = function(x,y) {
  return x + y;
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(array) {
	return array.reduce((accumulator,currentItem) => {
    return accumulator + currentItem;
  }, 0);
};

const multiply = function(array) {
  return array.reduce((accumulator, currentItem) => {
    return accumulator * currentItem;
  },1);
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }

  return result;
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
