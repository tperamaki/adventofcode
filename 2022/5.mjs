import { readFileSync } from 'fs';

const rawInput = readFileSync('./input/5.txt');
const betterInput = rawInput.toLocaleString().split('\n\n');

const startInput = betterInput[0]
  .split('\n')
  .map((row) => [row.charAt(1), row.charAt(5), row.charAt(9), row.charAt(13), row.charAt(17), row.charAt(21), row.charAt(25), row.charAt(29), row.charAt(33)])
  .reverse();
let stacks = [[], [], [], [], [], [], [], [], []];
startInput.forEach((row, i) => {
  if (i === 0) return;
  row.forEach((num, j) => stacks[j].push(num));
});
stacks = stacks.map((stack) => stack.filter((e) => e !== ' '));

const movesInput = betterInput[1]
  .split('\n')
  .map((row) => row.split(' '))
  .map((row) => [row[1], row[3], row[5]])
  .map((row) => row.map((num) => parseInt(num, 10)));

const a = () => {
  movesInput.forEach((move) => {
    for (let i = 0; i < move[0]; i++) {
      stacks[move[2] - 1].push(stacks[move[1] - 1].pop());
    }
  });
  return stacks.map((stack) => stack.pop()).join('');
};

const b = () => {
  movesInput.forEach((move) => {
    const crane = [];
    for (let i = 0; i < move[0]; i++) {
      crane.push(stacks[move[1] - 1].pop());
    }
    for (let i = 0; i < move[0]; i++) {
      stacks[move[2] - 1].push(crane.pop());
    }
  });
  return stacks.map((stack) => stack.pop()).join('');
};

// RUN A
// console.log('a');
// console.log(a());
// console.log('a end');

// RUN B
console.log('b');
console.log(b());
console.log('b end');
