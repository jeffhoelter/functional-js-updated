function increment(x) {
  console.log(`increment: ${x}`);
  return x + 1;
}
function decrement(x) {
  console.log(`decrement: ${x}`);
  return x - 1;
}
function double(x) {
  console.log(`double: ${x}`);
  return x * 2;
}
function half(x) {
  console.log(`half: ${x}`);
  return x / 2;
}

function compose(...functions) {
  return function comp(...args) {
    return functions.reduceRight(function(accumulator, currentValue) {
      if (accumulator === null) {
        return currentValue(...args);
      }
      return currentValue(accumulator);
    }, null);
  };
}

function pipe(...functions) {
  return compose(...functions.reverse());
}

var f = compose(decrement, double, increment, half);
var p = pipe(half, increment, double, decrement);

console.log(f(3));

console.log(f(3) === 4);
// true

console.log(f(3) === p(3));
console.log(f(3) === p(3));
