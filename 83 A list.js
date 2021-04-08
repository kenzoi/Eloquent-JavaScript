'use strict';

/* BOOK SOLUTION

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};  // <-- BETTER SOLUTION: NEST THE OWN OBJECT DECLARING A NEW ONE
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) { // <-- AWESOME! USE THE FOR TO ITERATE OVER THE LIST IN A VERY BETTER WAY
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return {value, rest: list};
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20 */

function arrayToList (array) {
  let list = {};
  let rest = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list.value = array[i];
    list.rest = rest;
    rest = {};
    rest.value = list.value;
    rest.rest = list.rest;
  }
  return list;
}

function listToArray (list) {
  const array = [];
  function recursiveListAccess(data) {  // Solution using Closure, accessing the outer function binding to store values. SEE BOOK SOLUTION
    array.push(data.value);
    if (data.rest === null) {
      return;
    } else {
      recursiveListAccess(data.rest);
    }
  }
  recursiveListAccess(list);
  return array;
}

function prepend (element, list) {
  return {value: element, rest: list};
}

function nth (list, number) {
  let nthElement = undefined;
  let nthRest = list;
  while (number >= 0) {
    nthElement = nthRest;
    if (nthElement !== null) {
      nthRest = nthElement.rest;
    }
    number--;
  }
  if (nthElement === null) {
    return undefined;
  }
  return nthElement.value;
}

function recursiveNth (list, number = 0) {
  if (!list) return undefined;
  else if (number === 0) return list.value;
  else return recursiveNth (list.rest, number - 1);
}

let label = '';
let arraySample = [1, 2, 3];
let listTest = arrayToList(arraySample);

console.log('arrayToList:', listTest);

console.log('listToArray test:', listToArray(listTest));

console.log('prepend function:', prepend(0, listTest));

label = 'nth function test:';
console.group(label);
console.log(nth(listTest, 0));
console.log(nth(listTest, 1));
console.log(nth(listTest, 2));
console.log(nth(listTest, 3));
console.log(nth(listTest, 4));
console.groupEnd(label);

label = 'recursiveNth function test:';

console.log(recursiveNth(listTest, 0));
console.log(recursiveNth(listTest, 1));
console.log(recursiveNth(listTest, 2));
console.log(recursiveNth(listTest, 3));
console.log(recursiveNth(listTest, 4));
console.groupEnd(label);