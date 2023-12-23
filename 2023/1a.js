const input = require('fs').readFileSync('1.input').toString().split('\n');

console.log(input.map((row) => row.split('').filter(character => character.match(/\d/)).reduce((prev, cur, i, arr) => prev + (i === 0 || i === arr.length - 1 ? cur : '') + (arr.length === 1 ? cur : ''), '')).map(Number).reduce((prev, cur) => prev + cur, 0))