import { readFileSync } from 'fs';

const rawInput = readFileSync('./input/4.txt');
const betterInput = rawInput.toLocaleString().split('\n');

const a = () => {
  return betterInput
    .map((row) => row.split(/[,-]+/).map((num) => parseInt(num, 10)))
    .reduce((prev, cur) => {
      if (cur[0] >= cur[2] && cur[1] <= cur[3]) return prev + 1;
      if (cur[2] >= cur[0] && cur[3] <= cur[1]) return prev + 1;
      return prev;
    }, 0);
};

const b = () => {
  return betterInput
    .map((row) => row.split(/[,-]+/).map((num) => parseInt(num, 10)))
    .reduce((prev, cur) => {
      if (cur[0] >= cur[2] && cur[0] <= cur[3]) return prev + 1;
      if (cur[1] >= cur[2] && cur[1] <= cur[3]) return prev + 1;
      if (cur[2] >= cur[0] && cur[2] <= cur[1]) return prev + 1;
      if (cur[3] >= cur[0] && cur[3] <= cur[1]) return prev + 1;
      return prev;
    }, 0);
};

// RUN A
console.log('a');
console.log(a());
console.log('a end');

// RUN B
console.log('b');
console.log(b());
console.log('b end');
