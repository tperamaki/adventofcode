import { readFileSync } from 'fs';

const rawInput = readFileSync('./input/1.txt');
const betterInput = rawInput
  .toLocaleString()
  .split('\n\n')
  .map((row) => row.split('\n').reduce((prev, cur) => prev + parseInt(cur, 10), 0));

const a = () => {
  return betterInput.sort((a, b) => b - a)[0];
};

const b = () => {
  return betterInput
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((prev, cur) => prev + cur, 0);
};

// RUN A
console.log('a');
console.log(a());
console.log('a end');

// RUN B
console.log('b');
console.log(b());
console.log('b end');
