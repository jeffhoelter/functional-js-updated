"use strict";

const returnNumber = value => {
  return () => {
    return value;
  };
};

const returnsFive = returnNumber(5);

const returnsSix = returnNumber(6);

const add = (x, y) => {
  return x + y;
};

console.log(add(returnsFive(), returnsSix()));

const add2 = (fn1, fn2) => {
  return add(fn1(), fn2());
};

console.log(add2(returnsFive, returnsSix));

const addNLoop = ([first, second, ...rest]) => {
  var sum = add2(first, second);
  rest.forEach(function(element) {
    sum = add2(returnNumber(sum), element);
  });
  return sum;
};

console.log(addNLoop([returnsFive, returnsSix, returnsFive, returnsSix]));

const addNRecursive = ([first, second, ...rest]) => {
  var sum = add2(first, second);
  if (rest.length === 0) {
    return sum;
  } else {
    return addNRecursive([returnNumber(sum), ...rest]);
  }
  return sum;
};

console.log(addNRecursive([returnsFive, returnsSix, returnsFive, returnsSix]));

const addNNative = arry => {
  return arry.reduce(function(accumulator, currentValue) {
    return add2(returnNumber(accumulator), currentValue);
  }, 0);
};

console.log(
  "addNNative: " +
    addNNative([returnsFive, returnsSix, returnsFive, returnsSix])
);

const oddAndEvenArrayWithDuplicates = [10, 9, 11, 9, 15, 20, 10];

const removeDuplicates = arry => {
  return arry.filter((element, pos) => {
    return arry.indexOf(element) === pos;
  });
};

console.log(removeDuplicates(oddAndEvenArrayWithDuplicates));

const findEvens = arry => {
  return arry.filter(element => {
    return !(element % 2);
  });
};

console.log(findEvens(oddAndEvenArrayWithDuplicates));

const addArray = arry => {
  return addNNative(
    arry.map(element => {
      return returnNumber(element);
    })
  );
};

console.log(addArray(oddAndEvenArrayWithDuplicates));
