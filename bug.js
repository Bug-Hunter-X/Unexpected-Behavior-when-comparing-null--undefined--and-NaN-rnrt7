function foo(x) {
  if (x === null) {
    return "null";
  } else if (x === undefined) {
    return "undefined";
  } else if (isNaN(x)) {
    return "NaN";
  } else {
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