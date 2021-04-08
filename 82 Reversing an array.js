'use strict';

function reverseArray (array) {
  const newArray = [];
  for (const x of array) {
    newArray.unshift(x);
  }
  return newArray;
}

function reverseArrayInPlace (array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
  let element = array[i];
  array[i] = array[array.length - (1 + i)];
  array[array.length - (1 + i)] = element;
  }
}

let sampleArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

let bigArraySample = [];
for (let i = 0; i < 1000; i++) {
  bigArraySample.push(i);
}


console.log(reverseArray(sampleArray));
console.log(reverseArray(bigArraySample));

console.log(reverseArrayInPlace(sampleArray));
console.log(reverseArrayInPlace(bigArraySample));
console.log('Sample Array:', sampleArray);
console.log('Big Array Sample:', bigArraySample);