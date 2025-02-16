function foo(x) {
  if (x === null) {
    return 0; // Correctly checks for null only
  }
  if (x === undefined) {
    return -1; // Handle undefined separately, or throw an error.
  }
  return x + 1;
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: -1