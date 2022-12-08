import { readFileSync } from 'fs';

const priorities = '§abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const rawInput = readFileSync('./input/3.txt');
const betterInput = rawInput
  .toLocaleString()
  .split('\n')
  .map((row) => [row.slice(0, row.length / 2), row.slice(row.length / 2)]);
const betterInput2 = rawInput
  .toLocaleString()
  .split('\n')
  .reduce((prev, cur, index, arr) => {
    return index % 3 === 2 ? [...prev, [arr[index - 2], arr[index - 1], arr[index]]] : prev;
  }, []);

const a = () => {
  return betterInput
    .map((row) => row[0].split('').reduce((prev, cur) => prev + (row[1].includes(cur) ? cur : ''), ''))
    .reduce((prev, cur) => prev + priorities.indexOf(cur.split('')[0]), 0);
};

const b = () => {
  return betterInput2
    .map((row) => row[0].split('').reduce((prev, cur) => prev + (row[1].split('').includes(cur) ? (row[2].split('').includes(cur) ? cur : '') : ''), ''))
    .reduce((prev, cur) => prev + priorities.indexOf(cur.split('')[0]), 0);
};

// RUN A
console.log('a');
console.log(a());
console.log('a end');

// RUN B
console.log('b');
console.log(b());
console.log('b end');
