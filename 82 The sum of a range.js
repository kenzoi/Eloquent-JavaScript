'use strict';

/*  BOOK SOLUTION, BEAUTIFUL RANGE PARAMETERS!

function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
} */

function range(start, end, step) {
  let arr = [];
  if (step == undefined) {
    step = 1;
  }
  if (start < end && step > 0) {
    for (; start <= end; start += step) {
      arr.push(start);
    }
  } else if (end < start && step < 0) {
    for (; start >= end; start += step) {
      arr.push(start);
    }
  }
  return arr;
}

function sum(arr) {
  return arr.reduce((accumulator, element) => accumulator + element);
}

console.log(range(1, 10));
console.log(sum(range(1, 10)));
console.log(range(5, 1, -1));
console.log(sum(range(5, 1, -1)));