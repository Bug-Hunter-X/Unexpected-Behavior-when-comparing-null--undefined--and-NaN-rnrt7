function foo(x) {
  // Check for null using strict equality
  if (x === null) {
    return "null";
  }
  // Check for undefined using strict equality
  else if (x === undefined) {
    return "undefined";
  }
  // Check for NaN using Number.isNaN
  else if (Number.isNaN(x)) {
    return "NaN";
  }
  //Handle other cases. Be cautious of implicit type coercion
  else {
    return x;
  }
}

console.log(foo(null)); // Output: null
console.log(foo(undefined)); // Output: undefined
console.log(foo(NaN)); // Output: NaN
console.log(foo(10)); // Output: 10
console.log(foo(true)); //Output: true
console.log(foo(false));//Output: false
console.log(foo({}));//Output: [object Object]
console.log(foo([]));//Output: []