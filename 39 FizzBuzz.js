'use strict';

/* BOOK SOLUTION, SMART CONCATENATION AND COOL LOG WITH THE FALLBACK ||

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
} */

let n = 1;
while (n <= 100) {
  if (n % 5 === 0 && n % 3 === 0) {
    console.log('FizzBuzz');
  } else if (n % 5 === 0 && n % 3 !== 0) {
    console.log('Buzz');
  } else if (n % 3 === 0) {
    console.log('Fizz');
  } else {
    console.log(n);
  }
  n++;
}
