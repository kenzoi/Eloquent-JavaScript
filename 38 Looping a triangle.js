// Page 38 - Looping a triangle
'use strict';

/* BOOK SOLUTION, THE FOR (LIKE THE IF) CAN BE EXECUTED WITHOUT THE {} TO SINGLE LINE EXPRESSIONS

for (let line = "#"; line.length < 8; line += "#")
  console.log(line); */

let triangles = '#';
while (triangles.length < 8) {
  console.log(triangles);
  triangles += '#';
}
