'use strict';

/* BOOK SOLUTION

function deepEqual(a, b) {
  if (a === b) return true;  // compares primitive values and the identity of the values

  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false; // return the exception as false if not a object

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;  // using the short-circuit!!! (to avoid call a function for nothing)
  }

  return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true */

function deepEqual(value1, value2) {
  if (value1 !== null && value2 !== null) {
    if (typeof value1 === 'object' && typeof value2 === 'object') {
      let value1Keys = Object.keys(value1);
      let value2Keys = Object.keys(value2);
      if (value1Keys.length !== value2Keys.length) return false;
      for (let i = 0; i < value1Keys.length; i++) {  // here it would be much more legible use the for (let... of...) instead of the classical for.
          if (!value2Keys.includes(value1Keys[i]) || !deepEqual(value1[value1Keys[i]], value2[value1Keys[i]])) return false;
      }
      return true; // to much ifs nested on others ifs leaves to some confusion, see book solution, return a if without nest it is more legible
    }
  }
  return value1 === value2;
}

console.log(deepEqual({a: 1, b: {c: 3}}, {a: 1, b: {c: 4}}));