'use strict';

/* BOOK SOLUTION, VERY COOL CHANGED THE NEGATIVE TO POSITIVE WITH A RECURSION CALL USING THE - SIGNAL!!!!

function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
} */

function isEven(integer) {
  if (Math.abs(integer) === 0) return true;
  else if (Math.abs(integer) === 1) return false;
  else return isEven(Math.abs(integer) - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(0));
console.log(isEven(-1));
console.log(isEven(-2));