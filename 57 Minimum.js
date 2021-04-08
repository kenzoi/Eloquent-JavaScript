'use strict';

/* BOOK SOLUTION
function min(a, b) {
  if (a < b) return a;
  else return b;
} */

function min (...args) {
  return Math.min(...args);
}

console.log(min(2, 3, 4));
console.log(min(1, 2, 3, 4, 5, 10, 99, 25, -5, -1000));