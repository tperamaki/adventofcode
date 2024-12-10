const input = require('fs').readFileSync('2.input').toString().split('\n');

console.log(
  input.reduce((acc, line) => {
    const linesplit = line.split(' ').map((n) => parseInt(n, 10));
    const isLineDescending = linesplit[0] > linesplit[1];
    const isSafe = linesplit.every(
      (e, i, arr) =>
        i === arr.length - 1 || (isLineDescending ? arr[i] > arr[i + 1] && arr[i] < arr[i + 1] + 4 : arr[i] < arr[i + 1] && arr[i] > arr[i + 1] - 4)
    );

    if (!isSafe) return acc;

    return acc + 1;
  }, 0)
);
