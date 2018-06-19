function negate(fn) {
  return function negated(...args) {
    return !fn(...args);
  };
}

var output = console.log.bind(console);

function printIf(fn) {
  return function(predicate) {
    return function(...args) {
      if (predicate(...args)) {
        return fn(...args);
      }
    };
  };
}

function isShortEnough(str) {
  return str.length <= 5;
}

var isLongEnough = negate(isShortEnough);

var msg1 = "Hello";
var msg2 = msg1 + " World";

printIf(output)(isShortEnough)(msg1); // Hello
printIf(output)(isShortEnough)(msg2);
printIf(output)(isLongEnough)(msg1);
printIf(output)(isLongEnough)(msg2); // Hello World
