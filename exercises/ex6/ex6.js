function mult(x, y, z) {
  return x * y * z;
}

function multR(product, ...rest) {
  if (rest.length === 0) {
    return product;
  }
  return product * multR(...rest);
}

console.log(multR(3, 4, 5)); // 60

console.log(multR(3, 4, 5, 6)); // Oops!
