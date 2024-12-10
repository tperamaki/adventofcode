const input = require('fs').readFileSync('1.input').toString().split('\n');

const row1 = [];
const row2 = [];

input.forEach((line) => {
  const [first, second] = line.split('   ');
  row1.push(first);
  row2.push(second);
});

row1.sort((a, b) => a - b);
row2.sort((a, b) => a - b);

console.log(row1.reduce((acc, curr, i) => acc + Math.abs(curr - row2[i]), 0));
