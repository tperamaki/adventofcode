import { readFileSync } from 'fs';

const rawInput = readFileSync('./input/11.txt');
const betterInput = rawInput.toLocaleString().split('\n').map(row => row.split(''));

const getSeat = (input, i, j) => {
  return input[i] && input[i][j] ? input[i][j] : '.';
};

const occupySeats = (input) => {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    const row = [];
    for (let j = 0; j < input[i].length; j++) {
      const adjacentSeats = [
        getSeat(input, i-1, j-1), getSeat(input, i-1, j), getSeat(input, i-1, j+1),
        getSeat(input, i, j-1), getSeat(input, i, j+1),
        getSeat(input, i+1, j-1), getSeat(input, i+1, j), getSeat(input, i+1, j+1)
      ];
      if (input[i][j] === 'L' && !adjacentSeats.some((seat) => seat === '#')) {
        row[j] = '#';
      } else if (input[i][j] === '#' && adjacentSeats.filter((seat) => seat === '#').length >= 4) {
        row[j] = 'L';
      } else {
        row[j] = input[i][j];
      }
    }
    result[i] = row;
  }
  return result;
};

const isSeatVisibleInADirection = (input, i, j, dirA, dirB) => {
  let a = i+dirA;
  let b = j+dirB;
  while (input[a] !== undefined && input[a][b] !== undefined) {
    if (input[a][b] === '#') {
      return true;
    } else if (input[a][b] === 'L') {
      return false;
    }
    a = a+dirA;
    b = b+dirB;
  }
  return false;
}

const visibleSeatCount = (input, i, j) => {
  let count = 0;
  for (let a = -1; a < 2; a++) {
    for (let b = -1; b < 2; b++) {
      if (a === 0 && b === 0) continue;
      count += isSeatVisibleInADirection(input, i, j, a, b) ? 1 : 0;
    }
  }
  return count;
};

const occupySeats2 = (input) => {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    const row = [];
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === 'L' && visibleSeatCount(input, i, j) === 0) {
        row[j] = '#';
      } else if (input[i][j] === '#' && visibleSeatCount(input, i, j) >= 5) {
        row[j] = 'L';
      } else {
        row[j] = input[i][j];
      }
    }
    result[i] = row;
  }
  return result;
};

const situationsMatch = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      if (a[i][j] !== b[i][j]) {
        return false;
      }
    }
  }
  return true;
};

const a = () => {
  let prevSituation;
  let newSituation = betterInput;
  do {
    prevSituation = newSituation;
    newSituation = occupySeats(prevSituation);
  } while (!situationsMatch(prevSituation, newSituation));

  console.log(newSituation.reduce((prev, cur) => {
    return prev + cur.filter((value) => value === '#').length;
  }, 0));
};

const b = () => {
  let prevSituation;
  let newSituation = betterInput;
  do {
    prevSituation = newSituation;
    newSituation = occupySeats2(prevSituation);
  } while (!situationsMatch(prevSituation, newSituation));

  console.log(newSituation.reduce((prev, cur) => {
    return prev + cur.filter((value) => value === '#').length;
  }, 0));
};

a();
b();
