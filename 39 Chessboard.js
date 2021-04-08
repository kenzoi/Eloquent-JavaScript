'use strict';

/* BOOK SOLUTION, NICE WAY TO CHECK IF THE BOTH ARE EVEN OR ODD USING THE REMAINDER ON THE SUM OF BOTH.
  ALSO THE \n TO BREAK THE LINE

let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board); */

let size = 8;
let line = '';
let originalSize = size;
let numOfLines = size;
while (numOfLines > 0) {
size = originalSize;
line = '';
  while (size > 0) {
    if (numOfLines % 2 === 0 && size % 2 === 0) {
      line += ' ';
    } else if (numOfLines % 2 === 0 && size % 2 !== 0) {
      line += '#';
    } else if (numOfLines % 2 !== 0 && size % 2 === 0) {
      line += '#';
    } else if (numOfLines % 2 !== 0 && size % 2 !== 0) {
      line += ' ';
    }
    size--;
  }
  console.log(line);
  numOfLines--;
}
