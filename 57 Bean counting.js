function  countBs (string) {
  return countChar(string, 'B');
}

function countChar (string, char) {
  let n = 0;
  for (let i = 0; i < string.length; i++)
    if (string[i] === char) {
      n++;
    }
  return n;
}

console.log(countBs('Bean B countingB')); // 3
console.log(countChar('n Bean B countingB nnn', 'n')); // 7